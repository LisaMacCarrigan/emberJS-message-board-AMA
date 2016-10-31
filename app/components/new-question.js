import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    submitQuestion1() {
      if(this.get('question')) {
        var params = {
          question: this.get('question'),
          author: this.get('author'),
          notes: this.get('notes'),
        };
        if (params.author === '') {
          params.author = "Anonymous";
        }

        // after gathering form data
        this.sendAction('submitQuestion2', params);
        this.set('addNewQuestion', false);
        this.set('question', '');
        this.set('author', '');
        this.set('notes', '');
      } else {
        alert("Hi! You must enter a question to continue.");
        return;
      }

    }
  }
});
