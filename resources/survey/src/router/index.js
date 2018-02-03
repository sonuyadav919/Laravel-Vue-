import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '../containers/Full'

// Views
import Dashboard from '../views/Dashboard'
import SchoolIndex from '../views/school/SchoolIndex'
import SurveyIndex from '../views/survey/SurveyIndex'
import TemplateIndex from '../views/template/TemplateIndex'
import ReportIndex from '../views/report/ReportIndex'


Vue.use(Router)

export default new Router({
  mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Dashboard',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/school',
          name: 'Manage School',
          component: SchoolIndex
        },
        {
          path: 'survey',
          redirect: '/survey/home',
          name: 'Survey',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'home',
              name: 'Manage Survey',
              component: SurveyIndex
            },
            {
              path: 'template',
              name: 'Manage Template',
              component: TemplateIndex
            }
          ]
        },
        {
          path: 'reports',
          name: 'Reports',
          component: ReportIndex
        }
      ]
    },
  ]
})
