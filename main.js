
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            addtask: {
                'name': '',
                'done': false
            }
        }
    },
    methods: {
        readList() {
            axios.get('server.php').then(response => {
                this.toDoList = response.data;
            })
        },
        addTask() {
            const data = {
                addtask: this.addtask
            };

            axios.post('server.php', data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                this.toDoList = response.data;
                this.addtask.name = '';
            });
        },
        switchDone(index) {
            const data = {
                setSwitchDone: index
            };
            axios.post('server.php', data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                this.toDoList = response.data;
            });
        },
        deleteTask(index) {
            const data = {
                deleteTask: index
            };
            axios.post('server.php', data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                this.toDoList = response.data;
            });
        }
    },
    mounted() {
        this.readList();
    }
}).mount('#app')

