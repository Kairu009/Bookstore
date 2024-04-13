<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <span>{{ item.title }}</span>
          <span>{{ item.price }}</span>
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
      <p>Total: {{ total }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    props: ['cartItems', 'total'],
    methods: {
      removeFromCart(item) {
        this.$emit('remove', item);
      }
    }
  }
  </script>
  
  <style>
    /* .title{
        text-align: center;
    }
    .cart-container {
    border: 1px solid #ccc;
    padding: 10px;
    }
    .cart-item {
    margin-bottom: 10px;
    }
    .quantity{
        float: right;
    }
    .increase-button{
        margin-left: 15px;
        background-color: rgb(128, 157, 221);
    }
    .decrease-button{
        margin-right: 15px;
        margin-left: 5px;
        background-color: rgb(182, 127, 255);
    }
    .remove-button{
        background-color: rgb(231, 86, 86);
        float: right;
    } */
  </style>
  