import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition) {
      if(!confirm('Are you sure you want to abandon progress?')) {
        transition.abort();
      }
    }
  }
});
