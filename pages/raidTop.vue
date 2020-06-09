<template>
  <a-table :columns="columns" :data-source="raid_top" row-key="id">
      <span slot="fractions" slot-scope="fraction">{{fraction === 'horde' ? 'Орда' : 'Альянс'}}</span>
  </a-table>
</template>

<script>
import raidTop from '~/apollo/queries/fetchRaidTop.gql';

const columns = [
    {
        title: 'Место',
        dataIndex: 'place',
        key: 'place',
    },
    {
        title: 'Гильдия',
        dataIndex: 'guildName',
        key: 'guildName',
    },
    {
        title: 'Сторона',
        dataIndex: 'fraction',
        scopedSlots: { customRender: 'fractions'},
    },
    {
        title: 'Сервер',
        dataIndex: 'realm',
        key: 'realm',
    },
    {
        title: 'Прогресс',
        dataIndex: 'progress',
        key: 'progress',
    },
]

export default {
    apollo: {
        raid_top: {
            prefetch: true,
            query: raidTop,
        }
    },
    data() {
        return {
            columns
        }
    }
}
</script>

<style>

</style>