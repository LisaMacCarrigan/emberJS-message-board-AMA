import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      if(this.get('input_question')) {
        var params = {
          question: this.get('input_question'),
          author: this.get('author'),
          notes: this.get('notes'),
        };
        this.set('editQuestionForm', false);
        this.sendAction('edit', question, params);
      } else {
        alert("You must enter a question.");
        return;
      }
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
