router: {
  routes: [
    {
      name: "index",
      path: "/",
      component: "pages/index.vue",
    },
    {
      name: "user",
      path: "/user",
      component: "pages/user/index.vue",
    },
    {
      name: 'users-profile',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: "maintenance",
      path: "/maintenance",
      component: "pages/maintenance.vue"
    },
  ];
}
