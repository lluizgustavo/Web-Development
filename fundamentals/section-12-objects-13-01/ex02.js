const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
    console.log(`Hello, ${order.order.delivery.deliveryPerson}, delivery to: ${order.name}, 
Cellphone: ${order.phoneNumber}, ${order.address.street}, 
Number: ${order.address.number}, AP: ${order.address.apartment}`)
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
    const pizzas = Object.keys(fullOrder.order.pizza).join(', ')
  return`Hello, Luiz Silva, the total value of your request of ${pizzas}
and ${order.order.drinks.coke.type} it's U$ ${fullOrder.payment.total}`
}
console.log(orderModifier(order));