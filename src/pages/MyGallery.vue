<template>
    <div>
    <div class="header">
<div  class="tit"> Recipe</div>
<div class="input-wropper">

    <form @submit.prevent="searchByLocation">
        
    <input type="text"   placeholder="seach here" v-model="searchStr">
    <i class="fa  fa-search" aria-hidden="true"/>
    </form>
    
  
</div>
    </div>

    <div class="list">
        <ReccipeCard v-for="recipe in Recipes" :detail="recipe" :key="recipe"/>
        
    </div>
    </div>
</template>

<script setup>
import ReccipeCard from '../components/ReccipeCard.vue';
import { ref, onMounted } from 'vue';
import http from '@/HttpComman.js'


const Recipes=ref([])

const searchStr=ref("")

onMounted(()=>{
    http.get("/filter.php?a=Canadian").then(res=>{
        
    
        Recipes.value= res.data.meals

        
    })
})

const searchByLocation = () =>{
    // /1/filter.php?a=Canadian

    http.get(`/filter.php?a=${searchStr.value}`).then(res=>{
        
    
        Recipes.value= res.data.meals

      

    })

}


</script>

<style scoped>
    .header{
        display: flex;
      padding:  10px;
        
    }
.tit{
    flex: 1;
}

.input-wropper{
    border: solid 2px #333;
    border-radius: 5px;
    
}
    .input-wropper input{
        outline: none;
        border: none;
    }


    .list{
      min-height: 90vh;

      padding-top: 60px;
      padding-left: 50px;
      padding-right: 50px;


      display: grid;
      grid-template-columns: repeat(3, 1fr) ;
gap: 1.5rem;
        
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #005aa7, #fffde4); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #005aa7, #fffde4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }


    
@media only screen and(max-width: 700px) {
    .list{
        grid-template-columns: 1fr 1fr;
    }
    
}

    
@media only screen and(max-width: 700px) {
    .list{
        grid-template-columns: 1fr;
    }
    
}

</style>