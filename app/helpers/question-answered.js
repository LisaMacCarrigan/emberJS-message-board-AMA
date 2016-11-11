import Ember from 'ember';

export function questionAnswered(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok">Answered</span>');
  }
}

export default Ember.Helper.helper(questionAnswered);
