<template>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue"
import Button from './components/Button.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  components: {
    Header,
    Button,
    Tasks,
    AddTask
  },
  methods:{
    deleteTask(id){
      if(confirm('Are you SUre !')){
        console.log(this.tasks)
        this.tasks= this.tasks.filter((x)=>{
          return x.id!==id
        })
      }
    }
    ,
    toggleReminder(id){
      this.tasks= this.tasks.map(x=> x.id===id ? {...x,reminder:!x.reminder} : x)
    },
    submitForm({id,text,day,reminder}){
      let arr = this.tasks;
      arr.push({id,text,reminder,day});
      console.log(arr)
      this.tasks = arr;
    },
    updateTask(task){

    }
  },
  data(){
    return {
      tasks:[],
      task:'',
      date:'',
      reminder:false
    }
  },
  created(){
    this.tasks=[
      {
        id:1,
        text:'Doctors Appointment',
        day:'March 1st at 2:30 pm',
        reminder:true,
      },
      {
        id:2,
        text:' Appointment',
        day:'May 1st at 2:30 pm',
        reminder:true,
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
