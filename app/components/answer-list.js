import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upvote(answer) {
      var vote = answer.get('upvote');
      vote += 1;
      answer.set('upvote', vote);
      answer.save();
      this.transitionTo('question');
    }
  }
});
