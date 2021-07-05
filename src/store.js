import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  state () {
    return {
      loggedUser: {
        email: '',
        bookmarks: [],
      },
    }
  },
  mutations: {
    login (state, payload) {
      Object.assign(state.loggedUser, payload);
    },
    updateBookMark(state, payload) {
      if (payload.action === 'add') {
        if (!state.loggedUser.bookmarks.includes(payload.recipeId)) {
          state.loggedUser.bookmarks.push(payload.recipeId);
        }
      } else if (payload.action === 'delete') {
        state.loggedUser.bookmarks = state.loggedUser.bookmarks.filter(dt => dt !== payload.recipeId);
      }
    }
  },
  plugins: [vuexLocal.plugin]
})

export default store;