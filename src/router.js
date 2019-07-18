import RouterHome from './pages/routerPages/Home'
import RouterUser from './pages/routerPages/user/User'
import RouterUserInfo from './pages/routerPages/user/UserInfo'
import RouterUserAdd from './pages/routerPages/user/UserAdd'
let routes = [
    {
        path: '/',
        component: RouterHome,
        exact: true
    },
    {
        path: '/user/',
        component: RouterUser,
        routes: [
            {
                path: '/user/',
                component: RouterUserInfo,
                exact: true
            },
            {
                path: '/user/useradd',
                component: RouterUserAdd
            }
        ]
    }

]

export default routes;