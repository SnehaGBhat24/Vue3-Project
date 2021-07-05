<template>
  <div v-if="data.bookmarks.length" class="ml-3">
    <div v-for="bookmark of data.bookmarks" :key="bookmark.id">
      <div class="columns mt-4">
        <div class="column is-11 is-size-3">{{bookmark.title}}</div>
        <div class="column">
          <button class="button is-danger is-large"
          @click="deleteBookMark(bookmark)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import Recipies from "../API/Recipes";

export default {
  name: 'BookMarks',
  setup() {
    let data = reactive({
      bookmarks: [],
      refreshView: 0,
    });
    const store = useStore();
    const deleteBookMark = (bookmark) => {
      store.commit('updateBookMark', { action: 'delete', recipeId: bookmark.id });
      data.bookmarks = data.bookmarks.filter(dt => dt.id !== bookmark.id);
    }
    const bookmarksIds = computed(() => store.state.loggedUser.bookmarks);
    onMounted(async () => {
      console.log('bookmarksIds.length', bookmarksIds);
      data.bookmarks = await Recipies.getBulkRecipies(bookmarksIds);
    });
    return {
      data,
      deleteBookMark,
    }
  }
}
</script>

<style scoped>
.disabled-anchor-tag {
  pointer-events: none !important;
  opacity : 0.5 !important;
}
</style>