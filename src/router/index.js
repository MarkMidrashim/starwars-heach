import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
// import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	/*{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [{
			path: '/redirect/:path*',
			component: () => import('@/views/redirect/index')
		}]
	},*/
	{
		path: '/404',
		component: () => import('@/views/error-page/404'),
		hidden: true
	},
	{
		path: '/401',
		component: () => import('@/views/error-page/401'),
		hidden: true
	},
	/*{
		path: '',
		component: Layout,
		redirect: 'dashboard',
		menuitem: 'dashboard',
		children: [{
			path: 'Dashboard',
			component: () => import('@/views/dashboard/index'),
			name: 'Dashboard',
			meta: { title: 'defaults.menu.dashboard', icon: 'fal fa-analytics', affix: true }
		}]
	}*/
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    /*{
        path: '/audit/contestacao',
        menuitem: 'audit',
        component: Layout,
        children: [{
            path: '/audit/contestacao',
            component: () => import('@/views/audit/contestacao'),
            name: 'Contestação',
            meta: {
				title: 'defaults.menu.audit.contestation',
				icon: 'fal fa-sack-dollar',
				roles: ['analyst', 'admin']
			}
        }]
    },
    {
        path: '/management/agendaParticulares',
        menuitem: 'management',
        component: Layout,
        children: [{
            path: '/management/agendaParticulares',
            component: () => import('@/views/management/agendaParticulares'),
            name: 'Agenda Particulares',
            meta: { title: 'defaults.menu.management.privateAgenda', icon: 'fal fa-clipboard-list' }
        }]
    },
	{
		path: '/profile',
		component: Layout,
		redirect: '/profile/index',
		menuitem: 'user',
		children: [{
			path: 'index',
			component: () => import('@/views/profile/index'),
			name: 'Profile',
			meta: { title: 'defaults.menu.profile', icon: 'fas fa-user-circle', noCache: true }
		}]
	},*/

	{ path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
	mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router
