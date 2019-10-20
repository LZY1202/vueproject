<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: 'Scroll',
        props:{
            probeType:{
                type: Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                scroll:null
            }
        },
        computed: {
            scrollY(){
                return this.scroll ? this.scroll.y : 0;
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: true,
                pullUpLoad: this.pullUpLoad,
            })

            this.scroll.on('pullingUp',()=>{
                this.$emit("loader")
            })

            this.scroll.on('scroll',position =>{
                this.$emit("scroll",position);
            })
        },
        methods: {
            scrollTo(x,y,time=500){
                this.scroll && this.scroll.scrollTo(x,y,time);
            },
            refresh(){
                this.scroll && this.scroll.refresh();
            },
            finishPullUp(){
                this.scroll && this.scroll.finishPullUp();
            }
        }
    }
</script>

<style scoped>
    
</style>