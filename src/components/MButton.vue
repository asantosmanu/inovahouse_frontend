<script setup>
const props = defineProps({
    texto: String
})
</script>

<template>
    <button class="butao">{{ props.texto }}</button>
</template>

<style scoped>
.butao{
    color:#ffffff
}
button {
    background-color: #e76d03;
    color: rgb(255, 255, 255);
    /* padding: 20px; */
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
    width: 200px;
    height: 50px;
    font-size: 16px;
    margin-bottom: 40px;
    font-family:Arial, Helvetica, sans-serif
    
}

button:hover {
    font-family: "Open Sans" sans-serif;
    background-color:  #f28a3180;
    color: black;
}

</style>