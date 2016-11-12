import Ember from 'ember';

export function questionAnswered(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=1) {
    return Ember.String.htmlSafe('<div id="checkmark"><span class="glyphicon glyphicon-ok"></span><span> Answered</span></div>');
  }
}

export default Ember.Helper.helper(questionAnswered);
