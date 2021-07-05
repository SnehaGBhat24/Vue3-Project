<template>
  <div
    class="column is-one-third is-pulled-left"
    v-for="recipe in data.recipes"
    :key="recipe.id"
  >
    <div class="card mt-5 ml-2">
      <header class="card-header">
        <p class="card-header-title is-size-4">{{recipe.title}}</p>
      </header>
      <div class="card-image">
        <figure class="image is-5by3">
          <img :src="getImgUrl(recipe)" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="content is-size-5">
          {{ getSummary(recipe.summary) }}
        </div>
      </div>
       <footer class="card-footer">
          <a href="#" class="card-footer-item is-size-4 has-text-black"
            @click.prevent="addToBookMarks(recipe)"
            :class="{ 'disabled-anchor-tag': disableBookMark(recipe) }"
            >BookMark</a>
          <a href="#" class="card-footer-item is-size-4 has-text-black"
          @click="goToUrl(recipe)">Details</a>
        </footer>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, reactive } from "vue";
import { useRouter } from 'vue-router';
import Recipies from "../API/Recipes";

export default {
  name: "Recipes",
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      recipes: [],
    });
    onMounted(async () => {
      data.recipes = await Recipies.getRandomRecipies({
        number: 30,
        tags: "vegetarian",
      });
    });
    const disableBookMark = (recipe) => {
      return store.state.loggedUser.bookmarks.includes(recipe.id);
    }
    const getImgUrl = (recipe) => recipe.image;
    const goToUrl = (recipe) => router.push(`/details/${recipe.id}`);
    const addToBookMarks = (recipe) => {
      store.commit('updateBookMark', { action: 'add', recipeId: recipe.id });
    }
    const getSummary = (summary) => {
      const a = new DOMParser().parseFromString(summary, "text/html");
      return a.body.textContent;
    }
    return {
      data,
      getImgUrl,
      goToUrl,
      addToBookMarks,
      disableBookMark,
      getSummary,
    };
  },
};
</script>

<style scoped>
.card {
  max-width: 98%;
}
.card-content {
  max-height: 30vh;
  overflow-y: scroll;
}
.card-header-title, .card-footer {
  height: 7vh;
}
</style>