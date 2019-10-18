// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
    path: 'order_rows',
    method: 'get',
    test() {
     // Check that there are no users in DB
     assert.deepEqual(response, []);
    },
    setup() {
      store.mockOrderRows = require('./mock-order_rows.json');
      store.mockOrderRows.forEach((row, index) => row.order_id = store.mockOrders[index].id);
      console.log("store.mockOrderRows", store.mockOrderRows);
    }
  });