import Ember from 'ember';
import LineItem from 'woodland/models/line-item'
import Order from 'woodland/models/order'
import Product from 'woodland/models/product'

const products = [
    Product.create({title: 'Tent', price: 10, description: 'asdf'}),
    Product.create({title: 'Sleeping Bag', price: 5, description: 'asdf'}),
    Product.create({title: 'Flashlight', price: 2, description: 'asdf'}),
    Product.create({title: 'First Aid Kit', price: 3, description: 'asdf'}),
];
const orders = [
    Order.create({
        id: 1234, name: 'Blaise Blobfish',
        items: [
            LineItem.create({product: products[0], quantity: 1}),
            LineItem.create({product: products[1], quantity: 1}),
            LineItem.create({product: products[2], quantity: 0}),
            LineItem.create({product: products[3], quantity: 1})
        ]
    })
];

export default Ember.Service.extend({

    getOrderById(id) {
        return this.getOrders().findBy('id', id);
    },

    getOrders() {
        return orders;
    },

    getProductsById(id) {
        return this.getProducts().findBy('id', id);
    },

    getProducts() {
        return products;
    },

    newOrder() {
       return Order.create({
           items: products.map((product) => {
               return  LineItem.create({
                   product: product
               })
           })
       })
    }
});
