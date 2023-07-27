<template>
    <div  @dblclick="$emit('toggle-reminder',task.id)"  :class="[task.reminder ? 'reminder' : '','task']">
    <div :style="{display:'flex',justifyContent:'space-between'}">
        <h3>{{task.text}}</h3>
        <div :style="{display:'flex'}">
        <div ><i @click="$emit('update-task',task)" class="fa fa-pencil fa-icon"></i></div>
        <div  :style="{marginLeft:'2px'}"><i @click="onDelete(task.id)" class="fas fa-times fa-icon"></i></div>
        </div>
    </div>
        <p>{{task.day}}</p>
    </div>
</template>

<script>

export default ({
    name:'Task',
    props:{
        task:{
            type:Object
        }
    },
    methods:{
        onDelete(id){
            this.$emit('delete-task',id);
        }
    }
})
</script>

<style scoped>

.fas {
 
  color: red;
}
.fa-icon{
  padding: 5px;
  border: black 2px solid;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>