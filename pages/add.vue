<template>
    <a-layout>
        <a-page-header
            title="Добавить рецепт"
            @back="() => $router.go(-1)"
        />
        <a-layout-content>
            <div class="site-layout-content">
                <a-form :form="form" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }" @submit="handleSubmit">
                    <a-form-item label="Название">
                        <a-input
                            v-decorator="['name', { rules: [{
                                required: true,
                                message: 'Поле обязательно к заполнению!'
                            }]}]"
                        />
                    </a-form-item>
                    <a-form-item label="Ингредиенты">
                        <a-textarea
                            v-decorator="['ingredients', { rules: [{
                                required: true,
                                message: 'Поле обязательно к заполнению!'
                            }]}]"
                        />
                    </a-form-item>
                    <a-form-item label="Рецепт">
                        <a-textarea
                            v-decorator="['instruction', { rules: [{
                                required: true,
                                message: 'Поле обязательно к заполнению!'
                            }]}]"
                        />
                    </a-form-item>
                    <a-form-item label="Ссылка на картинку">
                        <a-input
                            v-decorator="['imageUrl', { rules: [{
                                required: true,
                                message: 'Поле обязательно к заполнению!'
                            }]}]"
                        />
                    </a-form-item>
                    <a-form-item label="Ссылка на рецепт">
                        <a-input
                            v-decorator="['reciepeUrl', { rules: [{
                                required: true,
                                message: 'Поле обязательно к заполнению!'
                            }]}]"
                        />
                    </a-form-item>
                    <a-form-item >
                        <a-button type="primary" size="large" html-type="submit">
                            Сохранить
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
import insert_recipes_one from '~/apollo/queries/insertRecipe.gql';
import recipes from '~/apollo/queries/fetchRecipes.gql';

export default {
    data() {
        return {
            formLayout: "vertical",
            form: this.$form.createForm(this, { name: "add_recipe" })
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields( async (err, values) => {
                if (!err) {
                    try {
                        const res = await this.$apollo.mutate({
                            mutation: insert_recipes_one,
                            variables: { object: values},
                            update: (store, responce) => {
                                try {
                                    const data = store.readQuery({
                                        query: recipes
                                    });
                                    data.recipes.splice(0, 0, responce.data.insert_recipes_one);
                                    store.writeQuery({
                                        query: recipes,
                                        data
                                    });
                                } catch(e) {

                                }
                                this.$router.go(-1);
                            }
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }
            });
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
</style>