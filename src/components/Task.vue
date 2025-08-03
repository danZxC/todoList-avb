<template>
    <div class="task-wrapper">
        <input type="checkbox">
        <p>{{ text }}</p>
        <img class="cross" src="../assets/cross.png" alt="" @click ="DeleteTask">
    </div>
</template>


<script setup>
const props = defineProps(['text',"id"])
const emit = defineEmits(['Delete'])
function DeleteTask () {
    emit('Delete',props.id)
}

</script>

<style scoped>
    .task-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:20px;
        position: relative;
        background-color: #F9F9F9;
        height: 50px;
        padding: 10px;
    }

    img {
        height: 70%;
        position: absolute;
        right:10px;
    }
    img:hover {cursor: pointer;}
    p {
        font-size: 20px;
    }
    input {
        background-color: transparent;
        width: 20px;
        height: 20px;
    }
</style>