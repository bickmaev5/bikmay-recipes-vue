<template>
    <a-layout v-if="!!recipes_by_pk">
        <a-page-header
            :title="recipes_by_pk.name"
            @back="() => $router.go(-1)"
        />
        <a-layout-content>
            <div class="site-layout-content">
                <img
                    class="recipe-img"
                    :alt="recipes_by_pk.name"
                    :src="recipes_by_pk.imageUrl"
                />
                <a-divider>Ингредиенты</a-divider>
                <p>{{recipes_by_pk.ingredients}}</p>
                <a-divider>Рецепт</a-divider>
                <p>{{recipes_by_pk.instruction}}</p>
                <a-button type="primary" >
                    <a :href="recipes_by_pk.reciepeUrl" target="_blank">
                        Ссылка
                    </a>
                </a-button>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
import recipes from '~/apollo/queries/fetchRecipe.gql';

export default {
    apollo: {
        recipes_by_pk: {
            query: recipes,
            prefetch: ({ route }) => ({ id: route.params.id}),
            variables() {
                return {
                    id: this.$route.params.id
                }
            }
        }
    }
}
</script>

<style>
    .site-layout-content {
        background: #fff;
        margin: 24px;
        padding: 15px;
        min-height: 280px;
    }
    .recipe-img {
        width: 100%;
        object-fit: cover;
    }
</style>