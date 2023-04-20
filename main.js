
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],

        }
    },
    methods: {
        readList() {
            axios.get('server.php').then(response => {
                this.toDoList = response.data;
            })
        }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')

