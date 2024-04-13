<template>
    <div>
      <h2>Book List</h2>
      <input type="text" v-model="searchQuery" placeholder="Search Books">
      <ul>
        <li v-for="book in filteredBooks" :key="book.id">
          <span class="title">{{ book.title }}</span>
          <span class="price">{{ book.price }}</span>
          <button @click="addToCart(book)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookList',
    props: ['books'],
    data() {
      return {
        searchQuery: ''
      }
    },
    computed: {
      filteredBooks() {
        return this.books.filter(book => book.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    methods: {
      addToCart(book) {
        this.$emit('add-to-cart', book)
      }
    }
  }
  </script>
  
  <style>
      /* .head {
  margin: auto;
  width: 60%;
  border: 3px solid #aa63ec;
  padding: 10px;
  text-align: center;
}

.product-row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.product-card {
  flex: 1 0 25%;
  margin: 10px; 
  padding: 10px;
  box-sizing: border-box; 
  border: 1px solid #ccc;
}

.product-image {
  width: 100%; 
  height: 500px; 
  object-fit: contain; 
  display: block; 
}

.product-details {
  text-align: center;
}

.product-name {
  margin-bottom: 5px;
}

.product-price {
  font-weight: bold;
}

.button{
    height: 50px;
    width: 100px;
    background-color: #638eec;
}
.product-name{
    font-size: large;
} */
  </style>
  