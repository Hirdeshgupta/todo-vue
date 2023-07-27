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
                id:this.id ? this.id : Math.floor(Math.random()*100000),
                text:this.text,
                day:this.day,
                reminder:this.reminder
            }
            this.$emit('submit-form',newTask)
            this.id=undefined
            this.text='';
            this.day='';
            this.reminder=false;
        }
    },
    watch:{
      task:function(x,y){
        this.text=x;
        // this.id = x.id
        // console.log(x.id)
        // this.text  = x.text;
        // this.day  = x.day;
        // this.reminder = x.reminder;
        // console.log(this.id,this.text,this.day)
        // this.task = y;
      },
      id:function(x,y){
        this.id=x;
      },
      date:function(x,y){
        console.log(x)
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