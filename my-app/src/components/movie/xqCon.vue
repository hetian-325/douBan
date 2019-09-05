<template>
    <div>
        <div class="top">
            <div class="left">
                <h3>{{conarr[0].title}}</h3>
                <div class="lfa">
                    <star :num="conarr[0].rating.average"></star>
                    <span>{{conarr[0].rating.average}}</span>
                    <span>{{conarr[0].collect_count}}人评价</span>
                </div>
                <ul class="uls">
                    <li>{{conarr[0].year}} /</li>
                    <li>{{conarr[0].genres[0]}} /</li>
                    <li>{{conarr[0].genres[1]}} /</li>
                    <li>{{conarr[0].genres[2]}} /</li>
                    <li>{{conarr[0].casts[0].name}} /</li>
                    <li>{{conarr[0].casts[1].name}} /</li>
                    <li>{{conarr[0].casts[2].name}}</li>
                </ul>
                <p>用APP查看影人资料</p>
            </div>
            <div class="right">
                <img :src="conarr[0].images.small">
            </div>
        </div>
        <div class="btn">
            <a href="#">想看</a>
            <a href="#">看过</a>
        </div>
        <div class="conA">
            <span>{{conarr[0].title}}的简介</span>
            <p>{{conarr[0].content}}</p>
        </div>
        <div class="conA">
            <span>查看更多相关分类</span>
            <ul class="ulBox">
                <li>{{conarr[0].genres[0]}}</li>
                <li>{{conarr[0].genres[1]}}</li>
                <li>{{conarr[0].genres[2]}}</li>
            </ul>
        </div>
        <div class="conB">
            <span>{{conarr[0].title}}的图片</span>
            <div class="lunBo">
                <img :src="conarr[0].images.small">
                <img :src="conarr[0].images.small">
                <img :src="conarr[0].images.small">
            </div>
        </div>
        <div class="conB">
            <span>{{conarr[0].title}}的短评</span>
        </div>
    </div>
</template>

<script>
import star from '../star'
export default {
    components:{
        star
    },
    props:{
        conarr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .top{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding:0.2rem;
    }
    .left h3{
        font-size:0.2rem;
        margin-bottom: 0.1rem;
    }
    .lfa span{
        font-size:0.12rem;
        color:#ccc;
        margin:0 0.05rem;
    }
    .uls li{
        float:left;
    }
    .left p{
        color:#42bd56;
        clear: both;
        line-height: 0.3rem;
    }
    .right img{
        width:1.2rem;
        height:1.7rem;
    }
    .btn{
        width:100%;
        padding:0 0.2rem;
        display:flex;
        justify-content: space-between;
    }
    .btn a{
        width:48%;
        height:0.4rem;
        border:0.01rem solid #ffb712;
        border-radius:0.04rem;
        font-size:0.14rem;
        color:#ffb712;
        line-height:0.4rem;
    }
    .conA{
        padding:0.1rem 0.2rem;
    }
    .conA span{
        color:#ccc;
        line-height: 0.4rem;
    }
    .conA li{
        padding:0.1rem 0.2rem;
        background-color:#f5f5f5;
        border-radius:0.2rem;
        float:left;
        margin-right:0.1rem;
    }
    .ulBox{
        overflow: hidden;
    }
    .conB{
        padding:0.1rem 0 0.1rem 0.2rem;
    }
    .lunBo{
        margin-top:0.2rem;
        display:flex;
        overflow:auto;
    }
    .conB span{
        color:#ccc;
    }
    .conB img{
        width:1.6rem;
        height:1rem;
        margin:0.05rem;
    }
</style>