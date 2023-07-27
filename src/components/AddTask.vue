<template>

    <form  @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default({
    name:'AddTask',
    props:['task','date','reminder','id'],
    data(){
        return {
            id:this.id,
            text:this.task,
            day:this.date,
            reminder:this.reminder
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert('Please add  a task')
                return
            }
            let newTask= {
                id:this.id ||  uuidv4(),
                text:this.text,
                day:this.day,
                reminder:this.reminder
            }
            this.id=undefined
            this.text='';
            this.day='';
            this.reminder=false;
            this.$emit('submit-form',newTask)
      
        }
    },
    watch:{
      task:function(x,y){
        this.text=x;
      },
      id:function(x,y){
        this.id=x;
      },
      date:function(x,y){
        this.day=x;
      }
    },
    emit:['submit-form']
})
</script>



<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>