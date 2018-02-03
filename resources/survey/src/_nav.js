export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Manage School',
      url: '/school',
      icon: 'icon-calculator',
    },
    {
      name: 'Surveys',
      url: '/survey',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Manage Survey',
          url: '/survey/home',
          icon: 'icon-puzzle'
        },
        {
          name: 'Manage Template',
          url: '/survey/template',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-calculator',
    },
  ]
}
