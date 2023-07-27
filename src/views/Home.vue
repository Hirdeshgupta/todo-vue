<template>
      <div class="container">
  <div :style="{display:'flex',justifyContent:'space-around'}">
      <Header title="Task Tracker"/>
      <div>
      <Button class="btn"  text="AddTask" @click="addTask" color="black"/>
      <Button class="btn" v-if="isUpdate" text="Update Task" color="black"/>
      </div>
  </div>
 
  <AddTask @submit-form="submitForm" :task="task" :date="date" :id="id" />
  <Tasks  @update-task="updateTask" @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks" />
  </div>
</template>
<script>


import Header from "../components/Header.vue"
import Button from '../components/Button.vue'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
export default ({
    name:'Home',
    components:{
    Header,
    Button,
    Tasks,
    AddTask
    },
      methods:{
    deleteTask(id){
      if(confirm('Are you Sure !')){
        this.tasks= this.tasks.filter((x)=>{
          return x.id!==id
        })
      }
    },
    addTask(){
      this.task='';
      this.date='';
      this.isUpdate=false;
      this.reminder=false;
    }
    ,
    toggleReminder(id){
      this.tasks= this.tasks.map(x=> x.id===id ? {...x,reminder:!x.reminder} : x)
    },
    submitForm({id,text,day,reminder}){
      if(this.isUpdate){
        this.tasks  = this.tasks.map((x)=>x.id===id ? {id:id,text:text,day:day} : x);
        return
      }
      let arr = this.tasks;
      arr.push({id,text,reminder,day});
      this.tasks = arr;
    },
    updateTask(task){
      this.task= task.text;
      this.id= task.id;
      this.date = task.day;
      this.isUpdate=true;
    }
  },
  data(){
    return {
      tasks:[],
      id:null,
      task:'',
      date:'',
      isUpdate:false,
      reminder:false,
    }
  },
  created(){
    this.tasks=[
      {
        id:1,
        text:'Doctors Appointment',
        day:'March 1st at 2:30 pm',
        reminder:false,
      },
      {
        id:2,
        text:' Appointment',
        day:'May 1st at 2:30 pm',
        reminder:false,
      }
    ]
  }

  //watch 
  //mount 
})
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