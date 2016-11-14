import Ember from 'ember';

export default Ember.Service.extend({
  markedFavorites: [],

  add(question) {
    this.get('markedFavorites').pushObject(question);
  }
});
