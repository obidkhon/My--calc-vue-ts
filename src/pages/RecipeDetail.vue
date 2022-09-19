<template>
    <div class="conti">
<img :src="detail.strMealThumb" class="image">


<div class="detail">
    <h3>{{detail.strMeal}}</h3>

    <h5>{{detail.strArea}}</h5>

    <p>{{detail.strInstructions}}</p>
</div>


    </div>
</template>

<script setup>
    import {onMounted, ref} from "vue"
import http from "../HttpComman.js"
import {useRoute} from "vue-router";

   const  router= useRoute()



const detail=ref({})


    onMounted(()=>{
 
        

        http.get(`/lookup.php?i=${router.params.id} `).then(res =>{
            
            detail.value= res.data.meals[0]
        })
        
        
    })

</script>

<style  scoped>

    .conti{
        padding: 60px;
        display: flex
        
    }
.detail{
    padding: 20px;
}

.image{
    min-width: 300px;
    max-height: 500px;
    min-width: 300px;
}

@media only screen and(max-width: 600) {
    .conti{
        flex-direction: column
    }
    
}
</style>