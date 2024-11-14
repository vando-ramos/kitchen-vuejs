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
    },

    async acceptOrder() {
      try {
        const code = this.getOrderCode();
        if (code) {
          const response = await fetch(`http://localhost:3000/api/v1/establishments/GA0IOX/orders/${code}/in_preparation`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'in_preparation' })
          });
  
          if (response.ok) {
            this.order.status = 'in_preparation';
          } else {
            console.error('Erro ao aceitar o pedido');
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar o status do pedido:', error);
      }
    },

    async readyOrder() {
      try {
        const code = this.getOrderCode();
        if (code) {
          const response = await fetch(`http://localhost:3000/api/v1/establishments/GA0IOX/orders/${code}/ready`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'ready' })
          });
  
          if (response.ok) {
            this.order.status = 'ready';
          } else {
            console.error('Erro ao marcar o pedido como pronto');
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar o status do pedido:', error);
      }
    },
  },  

  mounted() {
    this.fetchOrderDetails();
  }
});

app.mount('#app');
