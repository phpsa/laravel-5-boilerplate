@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.frontend.dashboard') )

@section('content')
    <div id="react-app"></div>
@endsection
@push('after-scripts')
{!! script(mix('js/react.js')) !!}
@endpush