import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'credentials-page',
      component: require('@/components/CredentialsPage').default,
    },
    {
      path: '/vote/:role',
      name: 'voting-page',
      component: require('@/components/VotingPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
