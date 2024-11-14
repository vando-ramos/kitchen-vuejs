const app = Vue.createApp({
  data(){
    return {
      listOrders: [],
      filterStatus: ''
    }
  },

  computed: {
    filteredOrders() {
      if (this.filterStatus) {
        return this.listOrders.filter(order => order.status === this.filterStatus);
      }
      return this.listOrders;
    }
  },

  methods: {
    async getData(){
      let response = await fetch('http://localhost:3000/api/v1/establishments/GA0IOX/orders');

      let data = await response.json();      

      data.forEach(item => {
        var order = new Object();
        order.code = item.code;
        order.customerName = item.customer_name;
        order.totalValue = item.total_value;
        order.status = item.status;

        this.listOrders.push(order);
      })
    }
  },

  mounted() {
    this.getData();
  }
});

app.mount('#app');