import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path : '/', redirect : 'teams' },
        // { path: '/teams', component: TeamsList , alias : '/'},
        { name : 'teams', path: '/teams', component: TeamsList, children : [
            {
                name : 'team-members', path : ':teamId', component : TeamMember , props : true
            }
        ]},
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMember, props: true },
        { path: '/:notFound(.*)', component : NotFound }

    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        if(savedPosition) 
        {
            return savedPosition
        }
        return { left : 0, top : 0 }
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    // if(to.name === 'team-members') {
    //     next();
    // }else {
    //     next({ name : 'team-members', params : {teamId : 't2' } });
    // }
    next()
})

router.afterEach(function(from, to, next) {
    console.log('after each')
    console.log(from, to, next) 
})

const app = createApp(App);

app.use(router);

app.mount('#app');
