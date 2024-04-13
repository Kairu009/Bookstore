<template>
    <div>
        <h2>Book List Two</h2>
        <ul>
            <li v-for="book in salesBooks" :key="book.id">
                <span class="title">Title: {{ book.title }}</span>
                <span class="price"> Price: {{  book.price }}</span>
            </li>
        </ul>
        <button class="btn btn-secondary" @click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>

export default {
    computed: {
        books() {
            return this.$store.state.books;            
        },
        salesBooks() {
            return this.$store.getters.salesBooks;
        }
    },
    methods: {
        reducePrice: function() {
            this.$store.dispatch('reducePrice2')
        }
    }
}
</script>

<style scoped>
#book-list-two {
    background: lightcoral;
    padding: 10px
}
#booklist-two ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
#booklist-two li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
.title {
    font-style: italic;
    font-size: 1.2em;
}
</style>
