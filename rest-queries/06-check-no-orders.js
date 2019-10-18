// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
    path: 'orders',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
      // Reuse the mockUsers ids when creating new orders
      store.mockOrders = store.mockUsers.map(user => ({user_id: user.id}));
      console.log("BEFORE MAP store.mockUsers", store.mockUsers)
      console.log("AFTER MAP store.mockOrders", store.mockOrders);
    }
  });