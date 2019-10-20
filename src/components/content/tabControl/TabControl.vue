<template>
    <div class="tab-control">
        <ul class="tab-control-item">
            <li v-for="(item,index) in titles" :key="index"
                :class="{active:index===currentIndex}"
                @click="itemClick(index)"
            >
                <span>{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TabControl',
        props: {
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0,
            }
        },
        methods: {
            itemClick(index){
                this.currentIndex = index;
                this.$emit('tabClick', index)
            }
        }
    }
</script>

<style scoped>
    .tab-control-item{
        display: flex;
        text-align: center;
        margin-top: 5px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        background: white;
    }
    .tab-control-item li{
        flex: 1;
    }
    .tab-control-item span{
        padding:0 4px 8px 4px;
    }
    .active{
        color: var(--color-high-text)
    }
    .active span{
        border-bottom: 2px solid var(--color-tint);
    }
</style>