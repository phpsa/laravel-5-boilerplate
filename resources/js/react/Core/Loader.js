import React from 'react'
import Loadable from 'react-loadable'
import BaseLayout, {BaseLoading} from './BaseLayout'

export default (loader, requiredAuth = false, delay = 300) => (Layout = BaseLayout, loading = BaseLoading) => {

	return Loadable({
		loader,
		delay,
		loading,
		render(loaded, props) {
			return <Layout component={loaded.default} requiredAuth={requiredAuth} {...props} />
		}
	})
}

export const loadableComponent = (loader, delay = 300) => (loading = BaseLoading) => {
	return Loadable({
		loader,
		delay,
		loading,
		render: ({default: Component}, props) => {
			return <Component {...props} />
		}
	})
}
