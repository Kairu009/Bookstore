<template>
  <div>
    <book-list :books="books" @add-to-cart="addToCart"></book-list>
    <cart :cart-items="cartItems" :total="cartTotal" @remove="removeFromCart"></cart>
  </div>
</template>

<script>
import BookList from './components/BookList'
import Cart from './components/Cart'

export default {
  el: 'App',
  components: {
    'book-list': BookList,
    'cart': Cart
  },
  methods: {
    addToCart(book) {
      this.$store.commit('addToCart', book)
    },
    removeFromCart(book) {
      this.$store.commit('removeFromCart', book)
    }
  },
  computed: {
    books() {
      return this.$store.getters.books
    },
    cartItems() {
      return this.$store.getters.cartItems
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
}

.book-list {
  flex: 1 0 80%; /* 80% width */
}

.cart {
  flex: 1 0 20%; /* 20% width */
}
</style>