<template>
    <div  v-for="task in tasks" :key="task.id">
        <Task @update-task="$emit('update-task',task)" @toggle-reminder="$emit('toggle-reminder',task.id)" :task="task" @delete-task="$emit('delete-task',task.id)"></Task>
    </div>
</template>


<script>

import Task from "./Task.vue"
export default({
    name:'Tasks',
    components:{
        Task
    },
    props:{
        tasks:Array
    },
    emits:['delete-task','toggle-reminder','update-task']
})
</script>
