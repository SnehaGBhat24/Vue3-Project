<template>
  <div class="content">
    <h1 class="mt-3 ml-2 title is-2"><u>{{ data.name }}</u></h1>
    <div class="ml-5" v-for="step of data.steps" :key="step.number">
      <p class="title is-4 mt-3">Step {{ step.number }} - {{ step.step }}</p>
      <div class="ml-6">
        <dl v-if="step.equipment.length">
          <dt class="subtitle is-3">Equipments</dt>
          <ol>
            <li v-for="equipment in step.equipment" :key="equipment.id">
              <dd class="is-size-4">
                {{ equipment.name }}
              </dd>
            </li>
          </ol>
        </dl>
        <dl v-if="step.ingredients.length">
          <dt class="subtitle is-3">Ingredients</dt>
          <ol>
            <li v-for="ingredient in step.ingredients" :key="ingredient.id">
              <dd class="is-size-4">
                    {{ ingredient.name }}
              </dd>
            </li>
          </ol>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import Recipies from "../API/Recipes";

export default {
  name: "Recipe-Details",
  setup() {
    const route = useRoute();
    const data = reactive({
      steps: [],
      name: "",
    });
    onMounted(async () => {
      const a = await Recipies.getOne(route.params.id);
      data.steps = a.analyzedInstructions[0].steps;
      data.name = a.title;
    });
    return {
      data,
    };
  },
};
</script>