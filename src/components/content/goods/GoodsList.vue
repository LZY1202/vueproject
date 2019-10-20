<template>
    <div class="goods-list">
        <goods-list-item v-for="(item,index) in goodslist" :good="item" :key="index"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
    export default {
        name: '',
        props: {
            goodslist:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
                
            }
        },
        components: {
            GoodsListItem
        }
    }
</script>

<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 3px; 
    }
</style>