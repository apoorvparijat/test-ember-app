import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition) {
      if(!confirm('Are you sure you want to abandon progress?')) {
        transition.abort();
      } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
    }
  }
});
