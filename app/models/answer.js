import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', { asynce: true }),
  votes: DS.attr('number', { defaultValue: 0 })
});
