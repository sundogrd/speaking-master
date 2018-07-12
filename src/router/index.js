import Vue from 'vue'
import Router from 'vue-router'

import ReceiveGrant from 'views/auth/ReceiveGrant'

import Subjects from 'views/subject/Subjects'
import Subject from 'views/subject/Subject'
import SubjectSubmit from 'views/subject/SubjectSubmit'

import RecorderTest from 'components/SpeakingRecorder'

const Layout = resolve => require.ensure([], () => resolve(require('../views/layout/Layout')), 'Layout')
const Index = resolve => require.ensure([], () => resolve(require('../views/index/index')), 'Index')

/* error page */
const Err404 = resolve => require.ensure([], () => resolve(require('../views/error/404')), 'Err404')
const Err401 = resolve => require.ensure([], () => resolve(require('../views/error/401')), 'Err401')

Vue.use(Router)

/**
  * icon : the icon show in the sidebar
  * hidden : if hidden:true will not show in the sidebar
  * redirect : if redirect:noredirect will not redirct in the levelbar
  * noDropdown : if noDropdown:true will not has submenu
  * meta : { role: ['admin'] }  will control the page role
  **/

export const constantRouterMap = [
  /* { path: '/authredirect', component: authRedirect, hidden: true }, */
  { path: '/404', component: Err404, hidden: true, meta: { title: '404错误 - 午安网 - 过你想过的生活' } },
  { path: '/401', component: Err401, hidden: true, meta: { title: '401错误 - 午安网 - 过你想过的生活' } },
  {
    path: '/',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      component: Index,
      meta: { title: 'Speaking Master - A FREE speaking practice website' }
    }]
  },
  {
    path: '/receive-grant',
    component: ReceiveGrant
  },
  {
    path: '/subjects',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      name: 'subjects',
      component: Subjects
    }, {
      path: ':subjectId',
      name: 'subject',
      component: Subject
    }, {
      path: ':subjectId/submit',
      name: 'subjectSubmit',
      component: SubjectSubmit
    }]
  },
  {
    path: '/recorder',
    component: RecorderTest
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
