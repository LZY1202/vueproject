<template>
    <div id="toast" v-show="isShow">
        <span>{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        data() {
            return {
                message:"",
                isShow:false,
            }
        },
        methods:{
            show(message="默认文字",delay=1500){
                this.message = message;
                this.isShow = true;
                setTimeout(() => {
                    this.message = "";
                    this.isShow = false;
                }, delay);
            }
        }
    }
</script>

<style scoped>
    #toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
        background-color: rgba(0, 0, 0, 0.705);
        padding: 10px 12px;
        border-radius: 10px;
        z-index: 999;
    }
</style>