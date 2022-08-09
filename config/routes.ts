export default <RouteConfig[]>[
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    icon: 'SolutionOutlined',
    component: './Home',
  },
  {
    name: '权限演示',
    icon: 'ProfileOutlined',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    icon: 'FundOutlined',
    path: '/table',
    component: './Table',
  },
];
