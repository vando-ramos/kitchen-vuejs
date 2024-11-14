const app = Vue.createApp({
  data() {
    return {
      order: {},
      dishes: [],
      drinks: []
    }
  },

  methods: {
    getOrderCode() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('code');
    },

    async fetchOrderDetails() {
      const code = this.getOrderCode();

      if (code) {
        try {
          const response = await fetch(`http://localhost:3000/api/v1/establishments/GA0IOX/orders/${code}`);
          const data = await response.json();

          this.order = {
            code: data.order_code,
            customerName: data.customer_name,
            customerCPF: data.customer_cpf,
            customerPhone: data.customer_phone,
            customerEmail: data.customer_email,
            status: data.status,
            totalValue: data.total_value
          };
          this.dishes = data.dishes;
          this.drinks = data.drinks;
        } catch (error) {
          console.error('Erro ao buscar os detalhes do pedido:', error);
        }
      }
    }
  },

  mounted() {
    this.fetchOrderDetails();
  }
});

app.mount('#app');
