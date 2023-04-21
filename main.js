
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            addtask: {
                'name': '',
                'done': 'undone'
            },
        }
    },
    methods: {
        readList() {
            axios.get('server.php').then(response => {
                this.toDoList = response.data;
            })
        },
        addNewTask() {

            const data = {
                task: this.addtask
            };

            axios.post('server.php', data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.toDoList = response.data;
                    this.addtask.text = '';
                });
        }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')

