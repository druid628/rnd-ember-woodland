import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const store = this.get('store');
        return store.getOrders();
    },

    store: Ember.inject.service() // service name matches the local prop thus can be ommitted
    
});
