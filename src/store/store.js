// store.js
import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    books: [
      { id: 1, title: 'Berserk', author: 'Kentaro Miura', price: 500.00 },
      { id: 2, title: 'Jujutsu Kaisen', author: 'Gege Akutami', price: 150.00 },
      { id: 3, title: 'Hunter x Hunter', author: 'Yoshihiro Togashi', price: 250.00 },
      { id: 4, title: 'Vagabond', author: 'Takehiko Inoue', price: 500.00 },
      { id: 5, title: 'Attack on Titan', author: 'Hajime Isayama', price: 100.99 },
      { id: 6, title: 'Dragon Ball Z', author: 'Akira Toriyama', price: 140.50 },
      { id: 7, title: 'Bleach', author: 'Tite Kubo', price: 200.00 },
      { id: 8, title: 'One Piece', author: 'Eichiro Oda', price: 400.00 },
      { id: 9, title: 'Naruto', author: 'Mushashi Kishimoto', price: 250.00 },
      { id: 10, title: 'One Punch Man', author: 'Yusuke Murata', price: 100.00 },
     
    ],
    cart: [],
    isAuthenticated: false
  },
  mutations: {
    addToCart(state, book) {
      state.cart.push(book)
    },
    removeFromCart(state, book) {
      state.cart = state.cart.filter(item => item.id !== book.id)
    },
    updateAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  getters: {
    books: state => state.books,
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + item.price, 0)
    }
  },
  actions: {
    // Your actions here
  }
})
