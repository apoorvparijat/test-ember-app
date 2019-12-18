import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition) {
      if(!confirm('From contact: Are you sure you want to abandon progress?')) {
        transition.abort();
      }
    }
  }
});
