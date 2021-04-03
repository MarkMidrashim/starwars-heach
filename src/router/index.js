import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [{
			path: '/redirect/:path*',
			component: () => import('@/views/redirect/index')
		}]
	},
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
	{
		path: '',
		component: Layout,
		redirect: 'home',
		children: [{
			path: 'Home',
			component: () => import('@/views/home/index'),
			name: 'Home',
			meta: { title: 'home.title', icon: 'fal fa-analytics', affix: true }
		}]
	}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    {
        path: '/characters',
        component: Layout,
        children: [{
            path: '/characters',
            component: () => import('@/views/characters/'),
            name: 'Personagens',
            meta: { title: 'characters.title', icon: 'fal fa-user' }
        }]
    },
	{
        path: '/films',
        component: Layout,
        children: [{
            path: '/films',
            component: () => import('@/views/films/'),
            name: 'Personagens',
            meta: { title: 'films.title', icon: 'fal fa-user' }
        }]
    },
	{
        path: '/species',
        component: Layout,
        children: [{
            path: '/species',
            component: () => import('@/views/species/'),
            name: 'Personagens',
            meta: { title: 'species.title', icon: 'fal fa-user' }
        }]
    },
	{
        path: '/starships',
        component: Layout,
        children: [{
            path: '/starships',
            component: () => import('@/views/starships/'),
            name: 'Personagens',
            meta: { title: 'starships.title', icon: 'fal fa-user' }
        }]
    },
	{
        path: '/vehicles',
        component: Layout,
        children: [{
            path: '/vehicles',
            component: () => import('@/views/vehicles/'),
            name: 'Personagens',
            meta: { title: 'vehicles.title', icon: 'fal fa-user' }
        }]
    },
	{
        path: '/planets',
        component: Layout,
        children: [{
            path: '/planets',
            component: () => import('@/views/planets/'),
            name: 'Personagens',
            meta: { title: 'planets.title', icon: 'fal fa-user' }
        }]
    },

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
