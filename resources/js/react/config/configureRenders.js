const configureRenders = (store) => {

	/**
	 * Trigger off the renderReady event. The page will handle
	 * choosing what renders to run.
	 *
	 * This should be done AFTER all render methods are added to `Site`
	 *
	 * @author Sam Sehnert <sam@customd.com>
	 *
	 * @return {void}
	 */
	if( document ){

		const dispatchRenderReady = () => {

			const reactRenderReady = new Event('reactRenderReady')

			document.dispatchEvent(reactRenderReady)
		}

		if( /complete|interactive|loaded/.test(document.readyState)){

			dispatchRenderReady()
		} else {
			document.addEventListener('DOMContentLoaded', dispatchRenderReady, false)
		}
	}
}

export default configureRenders
