export class ChildRouter {

  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: '../welcome/welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: '../users/users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: '../childrouter/child-router',  nav: true, title: 'Child Router' }
    ]);

    this.heading = 'Child Router';
    this.router = router;
  }
}
