import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upvote() {
      var votes = this.get('votes');
      votes ++;
      this.set('votes', votes);
      this.save();
    }
  }
});
