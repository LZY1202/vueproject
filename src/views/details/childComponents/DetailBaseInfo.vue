<template>
    <div id="detail-base-info" v-if="Object.keys(goodDetails).length !== 0">
        <p>{{goodDetails.title}}</p>
        <div class="price">
            <span class="newPrice">{{goodDetails.newPrice}}&nbsp&nbsp</span>
            <span class="oldPrice">{{goodDetails.oldPrice}}&nbsp&nbsp&nbsp</span>
            <span class="discount">{{goodDetails.discount}}</span>
        </div>
        <div class="desc">
            <span>{{goodDetails.columns[0]}}</span>
            <span>{{goodDetails.columns[1]}}</span>
            <span>{{goodDetails.columns[2]}}</span>
        </div>
        <div>
            <ul class="service">
                <li v-for="(item,index) in goodDetails.services" :key="index">
                    <img :src="item.icon" alt="">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailBaseInfo',
        props: {
            goodDetails:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
#detail-base-info{
    margin: 10px 8px;
    font-family: '微软雅黑';
}
#detail-base-info p{
    margin-bottom: 10px;
    color: rgb(0, 0, 0);
    
    font-weight: bolder;
}
.newPrice{
    color: var(--color-tint);
    font-size: 20px;
    font-weight: bolder;
}
.oldPrice{
    font-size: 13px;
    text-decoration: line-through;
    color: rgb(156, 156, 156)
}
.discount{
    /* display: block; */
    background: var(--color-tint);
    color: white;
    font-size: 15px;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 1px;
    position: relative;
    top: -5px;
}
.desc{
    margin-top: 20px;
    display: flex;
    font-size: 13px;
    color: rgb(150, 148, 148);
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(150, 148, 148,0.3);
}
.service{
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
    border-bottom: 5px solid rgba(184, 184, 184, 0.192)
}
.service img{
    margin-top: 1px;
    width: 11px;
    height: 11px;
}

</style>