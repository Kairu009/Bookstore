<!-- BookListOne.vue -->
<template>
    <div>
      <h2>Book List One</h2>
      <ul>
        <li v-for="book in salesBooks" :key="book.id">
          <span class="title">Title: {{ book.title }}</span>
          <span class="price">Price: {{ book.price }}</span>
        </li>
      </ul>
      <button class="btn btn-primary" @click="reducePrice">Reduce Price</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookListOne',
    computed: {
      salesBooks() {
        return this.$store.getters.salesBooks
      }
    },
    methods: {
      reducePrice() {
        this.$store.dispatch('reducePrice1')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  