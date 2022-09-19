import { createWebHistory , createRouter } from "vue-router";

import MyGallery from "../pages/MyGallery.vue"
import RecipeDetail from "../pages/RecipeDetail.vue"


const routes = [
    {
      path: "/",
      name: "MyGallery",
      component: MyGallery,
    },

    {
      path:"/detail/:id",
      name:"RecipeDetail",
      component:RecipeDetail
    }


  
  
  
  
  ]
const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router