
<template>
  <a-layout class="layout">
    <app-nav/>
    <a-layout-content class="content">
      <h1>Рецепты</h1>
      <a-list item-layout="vertical" :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="recipes">
        <a-list-item slot="renderItem" slot-scope="item">
          <recipe-card
             :id="item.id"
             :name="item.name"
             :img="item.imageUrl"
          ></recipe-card>
        </a-list-item>
      </a-list>
    </a-layout-content>
  </a-layout>
</template>

<script>
import AppNav from '~/components/AppNav.vue';
import RecipeCard from '~/components/RecipeCard.vue';
import recipes from '~/apollo/queries/fetchRecipes.gql';

export default {
  apollo: {
    recipes: {
      prefetch: true,
      query: recipes,
    }
  },
  components: {
    AppNav,
    RecipeCard
  }
}
</script>

<style scoped>
  .content {
    padding: 0 20px 50px;
  }

  h1 {
    text-align: center;
  }
</style>

