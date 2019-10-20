<template>
    <div id="cart-bottom-bar">
        <div class="check-all">
            <check-btn @click.native="checkAll" :is-checked="ischeckAll"></check-btn>
            <span>全选</span>
        </div>
        <div class="sum-price">
            <span>合计:{{sum}}</span>
        </div>
        <div class="total" @click="totalClick">
            <span>去计算({{length}})</span>
        </div>
    </div>
</template>

<script>
import CheckBtn from 'components/content/checkbtn/CheckBtn'

import {mapGetters} from 'vuex'
    export default {
        name: 'CartBottomBar',
        components:{
            CheckBtn,
        },
        data() {
            return {
                ischeckall:Boolean,
            }
        },
        created(){
            this.ischeckall = this.$store.getters.checkedAll;
        },
        mounted(){
            
        },
        computed:{
            ...mapGetters({
                sum:'sumPrice',
                length:'checkListLength',
                ischeckAll: 'checkedAll'
            }),
        },
        methods:{
            checkAll(){
                if(this.ischeckall !== this.ischeckAll){
                    this.ischeckall = !this.ischeckall;
                }
                this.ischeckall = !this.ischeckall;
                this.$store.commit("checkAll",this.ischeckall)
            },
            totalClick(){
                if(this.length <= 0){
                    this.$toast.show("你还没有选择商品")
                }else{
                    this.$toast.show("结算")
                }
            }
        }
    }
</script>

<style scoped>
    #cart-bottom-bar{
        height: 40px;
        background: rgba(172, 172, 172, 0.226);
        position: relative;
        display: flex;
        justify-content: center;
        align-items:center;
        font-family: '微软雅黑';
        font-size: 15px;
    }
    .check-all{
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sum-price{
        padding-left: 20px;
        flex:1;
    }
    .total{
        width: 30%;
        background: rgb(255, 60, 0);
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
    }
</style>