import App from './components/layout/Master'

import {
    Dashboard,
    Profile,
    Catalog
} from './components'

export default [
    { 
        path: '/', 
        component: App,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile
            },
            {
                path: 'catalog',
                name: 'catalog',
                component: Catalog
            }
        ]
    },
]