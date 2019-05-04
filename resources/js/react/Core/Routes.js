import Loader from './Loader'

export default [
	{
		from: '/',
		to: '/dashboard'
	},
	{
		path: '/dashboard',
		component: Loader(() => import('../Components/Dashboard'), true)()
	}
]



/*export default [
	{
		path: '/landlord',
		component: Home
	},
	/*{
		path: '/landlord/profile',
		component: Profile
	},
	{
		path: '/landlord/auth/forgot',
		component: Forgot
	},
	{
		path: '/landlord/auth/login',
		component: Login
	},
	{
		from: '/landlord/test-redirect',
		to: '/landlord/profile'
	},
	{
		path : '/landlord/auth/register',
		component: Register
	},
	{
		path : '/landlord/creditcheck',
		component: CreditCheck
	},
	{
		path : '/landlord/creditcheck/history',
		component: CreditCheckHistory
	},
	{
		path : '/landlord/creditcheck/view/:reportId',
		component: CreditCheckResult
	},
	{
		path : '/landlord/creditcheck/applicant/:applicantId',
		component: CreditCheck
	},
	{
		path: '/landlord/pmdirectory',
		component: Pmdirectory
	},
	{
		path : '/landlord/properties',
		component: Properties
	},
	{
		path : '/landlord/applications/:propertyId?',
		component: Applications
	},
	{
		path : '/landlord/application/:application',
		component: ApplicationView
	},
	{
		path : '/landlord/agreements',
		component: Agreements
	},
	{
		path : '/landlord/agreements/create',
		component: AgreementView
	},
	{
		path : '/landlord/agreements/create/:agreementId',
		component: AgreementView
	},
	{
		path : '/landlord/about',
		component: LandlordAbout
	},
	{
		path : '/landlord/terms',
		component: LandlordTerms
	},*/

	/*{
		component: (props) => {window.location.replace(props.location.pathname)}
	}*/
