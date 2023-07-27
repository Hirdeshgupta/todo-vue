<template>
    <button @click="onClick()" :style="{background:color}" >  {{text}}</button>
</template>

<script>

export default ({
    name:'Button',
    props:{
        text:{
            type:String,
        },
        color:{
            type:String
        }
    },
    methods:{
        onClick(){
            
        }
    }

})
</script>


<style scoped>

</style>