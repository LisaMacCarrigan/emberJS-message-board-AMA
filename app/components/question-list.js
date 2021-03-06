import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addFavorite(question) {
      this.get('favorites').add(question);
    }
  }

});
