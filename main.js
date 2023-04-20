
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            addtask: '',
        }
    },
    methods: {
        readList() {
            axios.get('server.php').then(response => {
                this.toDoList = response.data;
            })
        },
        addNewTask() {

            this.toDoList.push({ name: this.addtask, check: "undone", });
            this.addtask = '';

        }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')

