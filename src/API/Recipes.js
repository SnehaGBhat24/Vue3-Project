import request from './base';

export default {
  getRandomRecipies: async(params) => {
    try {
      const { data } = await request.get('/recipes/random', { params });
      return data.recipes;
    } catch (e) {
      throw new Error('Error fetching recipies', e);
    }
  },
  getOne: async(id) => {
    try {
      const { data } = await request.get(`/recipes/${id}/information`);
      return data;
    } catch (e) {
      throw new Error('Error fetching recipies', e);
    }
  },
  getBulkRecipies: async(allIds) => {
    try {
      const { data } = await request.get(`/recipes/informationBulk`,
        { params: 
          { ids: allIds.value.toString() } 
        }
      );
      return data;
    } catch (e) {
      throw new Error('Error fetching recipies', e);
    }
  }
}