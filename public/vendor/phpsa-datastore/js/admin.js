 //htmlEditor
$('.ams-htmleditor').trumbowyg();
var safeDecodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    function decodeHTMLEntities(str) {
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }

        return str;
    }

    return decodeHTMLEntities;
})();

// Autocomplete */
(function ($) {
    function AutoInput(element, options) {
        this.element = element;
        this.options = options;
        this.timer = null;
        this.items = new Array();

        $(element).attr('autocomplete', 'off');
        $(element).on('focus', $.proxy(this.focus, this));
        $(element).on('blur', $.proxy(this.blur, this));
        $(element).on('keydown', $.proxy(this.keydown, this));

        $(element).after('<ul class="dropdown-menu"></ul>');
        $(element).siblings('ul.dropdown-menu').delegate('li', 'click', $.proxy(this.click, this));
    }

    AutoInput.prototype = {
        getElement: function () {
            return $(this.element);
        },
        focus: function () {
            this.request();
        },
        blur: function () {
            setTimeout(function (object) {
                object.hide();
            }, 200, this);
        },
        click: function (event) {
            event.preventDefault();
			value = $(event.target).data('value');

            if (value && this.items[value]) {
                this.options.select(this.items[value]);
            }
        },
        keydown: function (event) {
            switch (event.keyCode) {
                case 27: // escape
                    this.hide();
                    break;
                default:
                    this.request();
                    break;
            }
        },
        show: function () {
            var pos = $(this.element).position();
            console.log(pos);
            $(this.element).siblings('ul.dropdown-menu').css({
                left: pos.leftm,
                top: pos.top + $(this.element).outerHeight(),
                width: $(this.element).outerWidth()
            });

            $(this.element).siblings('ul.dropdown-menu').show();
        },
        hide: function () {
            $(this.element).siblings('ul.dropdown-menu').hide();
        },
        request: function () {
            clearTimeout(this.timer);

            this.timer = setTimeout(function (object) {
                object.options.source($(object.element).val(), $.proxy(object.response, object));
            }, 350, this);
        },
        response: function (json) {
            html = '';

            if (json.length) {
                for (i = 0; i < json.length; i++) {
                    this.items[json[i]['value']] = json[i];
                }

                for (i = 0; i < json.length; i++) {
                    html += '<li class="dropdown-item" data-value="' + json[i]['value'] + '">' + safeDecodeEntities(json[i]['label']) + '</li>';
                }

            }

            if (html) {
                this.show();
            } else {
                this.hide();
            }

            $(this.element).siblings('ul.dropdown-menu').html(html);
        }
    };

    $.fn.autoinput = function (option) {
        return this.each(function () {
            var data = $(this).data('autoinput');

            if (!data) {
                data = new AutoInput(this, option);

                $(this).data('autoinput', data);
            }
        });
    }
})(window.jQuery);

$('input.autoinput').each(function () {
	var $this = $(this);
	var url = $this.data('url')
	var method = $this.data('type') || 'get'

	//     console.log($(this).attr('data-url'));
	$(this).autoinput({
		'source': function (request, response) {
			$.ajax({
				url: url,
				method: method,
				data: {q :encodeURIComponent(request)},
				dataType: 'json',
				success: function (json) {
					response(json);
				}
			});
		},
		'select': function (item) {
			if ($this.attr("data-limit") == "1") {
				$this.val(safeDecodeEntities(item['label']));
				$('#' + $this.attr('data-target')).val(item['value']);

			} else {
				$this.val('');
				$('#' + $this.attr('data-target') + '-' + item['value']).remove();

				$('#' + $this.attr('data-target')).append('<div class="list-group-item" id="' + $this.attr('data-target') + '-' + item['value'] + '"><div class="input-group"><span class="input-group-btn"><button class="btn btn-default btn-minus-circle" type="button"><i class="fa fa-minus-circle text-danger"></i></button></span><span class="form-control">' + item['label'] + '</span><input type="hidden" name="' + $this.attr('data-key') + '[]" value="' + item['value'] + '" /></div></div>');
			}
		}
	});
});

if(amsSettings.editing === false){
	//Autocomplete Slug
	var timedCall = false;
	$(document).on('keyup', '#pageTitle', function() {

		if(timedCall) clearTimeout(timedCall);
		var pageTitle = $(this).val()
		timedCall = setTimeout(function() {
			$.get(amsSettings.routes.slug + '?generate=1&page_slug=' + pageTitle)
			.then(function(response) {
				$('#pageSlug').val(response.slug);
				typeof validator !== 'undefined' && validator.element( "#pageSlug" );
			});
		}, 350);
	});

	if(amsSettings.titleField !== ''){
		$(document).on('keyup', '[name="' + amsSettings.titleField + '"]', function () {
			if($('#pageTitle').length === 1){
				//Maybe find out if it has already been keyed ?
			}
		});
	}
}

//form Validation
if(typeof $.validator !== 'undefined'){
	var validator = $('#create-asset-form').validate({
		ignore: [
			'.no-validate'
		],
		invalidHandler: function() {

			var submits = $(this).find('[type="submit"]');
				setTimeout(function() {
					submits.attr('disabled', false);
					$('.nav-tabs a strong.required').remove();
					var validatePane = $('.tab-content.tab-validate .tab-pane:has(input.is-invalid)').each(function() {
						var id = $(this).attr('id');
						$('.nav-tabs,.nav-pills').find('a[href^="#' + id + '"]').append(' <strong class="required text-danger">***</strong> ');

					});
				});
			},
		errorElement: "em",
		errorPlacement: function errorPlacement(error, element) {
			error.addClass("invalid-feedback");
			if (element.prop("type") === "checkbox") {
			error.insertAfter(element.parent("label"));
			} else {
			error.insertAfter(element);
			}
		},
		highlight: function highlight(element) {
			$(element)
			.addClass("is-invalid")
			.removeClass("is-valid");
		},
		unhighlight: function unhighlight(element) {
			$(element)
			.addClass("is-valid")
			.removeClass("is-invalid");
		},
		rules: {
			page_slug : {
				required: true,
				remote: {
					url:  amsSettings.routes.slug,
					data: {
						id: function() {
							return $('#asset_id').val()
						}
					}
				}
			}
		}
	});
}

$('#addChild').click(function () {
	var idx = Number($('a.child-tab:last').attr('data-count'));
	var counter = idx + 1;
	var label = $('a.child-tab:last').attr('data-label') + ' ' + counter;

	$('a.remove-child').show();
	$('#addChild').hide();

	var childPill = $('a.child-tab:last').clone();
	childPill.attr('data-count', counter)
	.attr('id', 'v-pills-' + counter + '-tab')
	.attr('aria-controls' , 'v-pills-' + counter)
	.attr('href', '#v-pills-' + counter )
	.removeClass('active')
	.text(label);

	$('#child-pills').append(childPill);

	var childTab = $('.child-tab-pane:last').clone();
	childTab.attr('id','v-pills-' + counter)
	.attr('ria-labelledby', 'v-' + counter + '-home-tab')
	.removeClass('active');

	childTab.find('h6').find('span').text($('a.child-tab:last').attr('data-label') + ' ' + counter);
	childTab.find('h6').find('a')
	.attr('data-target', '#v-pills-' + counter)
	.attr('data-count', counter)
	.text('Remove ' + $('a.child-tab:last').attr('data-label') + ' ' + counter);

	childTab.find('.child-asset-form-container').empty()

	$('.child-tab-pane:last').after(childTab);


	childTab.find('.child-asset-form-container').load(amsSettings.routes.inject + '?asset=' + $('a.child-tab:last').attr('data-type') + '&idx=' + counter, function() {
		childPill.trigger("click");
		childTab.find('.ams-htmleditor').trumbowyg();
		$('#addChild').show();
	});

return false
});

$(document).on("click", 'a.remove-child', function () {
	var count = $(this).attr('data-count');
	var tab = $(this).attr('data-target');
	// if it is not green, do this
	if (!$(this).hasClass('btn-success')) {
		$(tab).find('div.child-mask').show();
		$(tab).find('.asset-injector-input').attr('name', $(tab).find('.asset-injector-input').attr('name').replace('assetInjectionform', 'assetRemove'));
		$('a.child-tab[data-count=' + count + ']').addClass('removed');
		$(this).addClass('btn-success').removeClass('btn-danger').text($(this).text().replace('Remove', 'Restore'));
		if ($('a.child-tab').not('.removed').length <= 1) {
			$('a.remove-child').not('.btn-success').hide();
		}
	} else {
		$(tab).find('div.child-mask').hide();
		$(tab).find('.asset-injector-input').attr('name', $(tab).find('.asset-injector-input').attr('name').replace('assetRemove', 'assetInjectionform'));
		$('a.child-tab[data-count=' + count + ']').removeClass('removed');
		$(this).removeClass('btn-success').addClass('btn-danger').text($(this).text().replace('Restore', 'Remove'));
		$('a.remove-child').show();
	}
	return false;
});

$(document).on("click", ".ams-upload-button, .ams-upload-filename", function() {
	var target = $(this).data('target');
	$('#' + target).trigger("click");
});

$(document).on('keydown', '.ams-upload-filename', function(e) {
	e.preventDefault();
	e.stopPropagation();
	return false;
})

$(document).on("click", ".ams-upload-clear-button", function(e) {
	e.preventDefault();
	var target = $(this).data('target') + '_file';
	$('#' + target).val('');
	$('img[data-rel="' + target + '"]').attr('src', $('img[data-rel="' + target + '"]').data('placeholder'));

})

$(document).on("change", ':file', function() {
	var file = this.files[0];
	var data = new FormData();
	var target = $(this).attr('id') + '_file';

	var url = $(this).hasClass('ams-image') ? amsSettings.routes.image : amsSettings.routes.file
	data.append("file", file);
	data.append("_token" , $('meta[name="csrf-token"]').attr('content'));

	$.ajax({
		url: url,
		type: 'POST',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		xhr: function () {
			$('progress[data-rel="' + target + '"').show();
			var myXhr = $.ajaxSettings.xhr();
			if (myXhr.upload) {
				// For handling the progress of the upload
				myXhr.upload.addEventListener('progress', function (e) {
					if (e.lengthComputable) {
						$('progress').attr({
							value: e.loaded,
							max: e.total,
						});
					}
				}, false);
			}
			return myXhr;
		},
		success: function(res) {
		//	$('progress[data-rel="' + target + '"').hide();
			$('#' + target).val(res.file);
			$('img[data-rel="' + target + '"]').attr('src', amsSettings.routes.thumbs + '/' + res.file)
		}
	});
});
