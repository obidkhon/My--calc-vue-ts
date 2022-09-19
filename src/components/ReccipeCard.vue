<template>
    <router-link :to ="{ name: 'RecipeDetail', params :{id: detail.idMeal}} " >
        
    <div class="card">

        
<img :src="detail.strMealThumb" class="thump">
<div class="title"> {{detail.strMeal}}</div>
    </div>
    </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props=defineProps({
    detail:{}
})
    

</script>

<style  scoped>

    .card{
        min-height: 270px;
        max-height: 320px;
        background-color: azure;
        border-radius: 10px;
        padding: 10px;
        
    }

    .thump{
        height: 220px;
        width: 100%;
        object-fit: cover;
    }


    .title{
        color: black;
        text-decoration: none;

    }

</style>