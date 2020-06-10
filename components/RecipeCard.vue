<template>
    <nuxt-link :to="`/recipe/${id}`">
        <a-card hoverable>
            <img
                slot="cover"
                :alt="`${name}`"
                :src="img"
            />
            <a-card-meta :title="name"></a-card-meta>
        </a-card>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        img: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped>
    img {
        height: 450px;

        object-fit: cover;

        @media screen and (max-width: 767px) {
            max-height: 200px;
        }
    }
</style>