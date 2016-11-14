import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  formattedTime: Ember.computed(function() {
    var dateTime = moment().format('ddd MMM DD YYYY');
    return dateTime;
  }),

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
          date: this.get('formattedTime')
        };
        if (params.author === '') {
          // this now only works when the input field is clicked
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
