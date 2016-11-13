import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    submitAnswer1() {
      if(this.get('answer')) {
        var params = {
          answer: this.get('answer'),
          author: this.get('author_answer'),
          question: this.get('question')
        };
        if (params.author === '') {
          // this now only works when the input field is clicked
          params.author = "Anonymous";
        }

        // after gathering form data
        this.sendAction('submitAnswer2', params);
        this.set('addNewAnswer', false);
        this.set('answer', '');
        this.set('author_answer', '');
      } else {
        alert("Hello, helpful person. Please provide an answer!");
        return;
      }
    }
  }
});
