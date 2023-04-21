<script setup lang="ts">


</script>

<template>
    <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
        <input type="text" placeholder="Search"  />
    </div>
    
</template>


<style scoped>
.search-bar{
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 16px;
    padding: 5px;
    width: 300px;
}
.search-bar i{
    margin: 2px 5px 2px 5px;
}
.search-bar input{
    border: none;
    background-color: #f5f5f5;
    outline: none;
    width: 100%;
}
</style>