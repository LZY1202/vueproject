<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <img :src="item.image" alt="" @load="imageload">
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name: 'HomeSwiper',
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
               isLoad: false, 
            }
        },
        methods:{
            imageload(){
                if(!this.isLoad){
                    this.isLoad = true;
                    this.$emit("swiperLoad")
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    
</style>