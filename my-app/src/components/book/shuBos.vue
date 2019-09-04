<template>
    <div>
        <div class="top">
            <span>{{tl}}</span>
            <a href="#">更多</a>
        </div>
        <shu-boss :shuarr="ziarr"></shu-boss>
        <div class="lbBox">
            <div class="con" v-for="(v,i) in ziarr" :key="i">
                    <img :src="v.image">
                    <p>{{v.subtitle}}</p>
                <star :num="v.rating.average"></star><span class="btm">{{v.rating.average}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import star from '../star'
import shuBoss from './shuBoss'
export default {
    components:{
        star,
        shuBoss
    },
    props:{
        tl:{
            type:String,
            required:true
        },
        ziarr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .top{
        width:100%;
        height: 0.5rem;
        padding:0 0.16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top span{
        font-size:0.16rem;
        color:#111;
    }
    .top a{
        font-size:0.14rem;
        color:#42bd56;
    }
    .lbBox{
        width:100%;
        display:flex;
        overflow:auto;
    }
    .con{
        margin:0 0.05rem;
    }
    .con img{
        width:1.2rem;
        height:1.7rem;
    }
    .con p{
        font-size:0.16rem;
        text-align:center;
        margin-bottom:0.05rem;
        width:1.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .btm{
        margin-left:0.1rem;
    }
</style>