<template>
    <div>
        <div class="top">
            <img src="../../../static/img/ad.jpg">
            <span>关于{{title}}的问答</span>
        </div>
        <div class="btm">
            <p>大家为什么对国产片这么苛刻？</p>
            <span>35回答</span>
            <p>大家为什么对国产片这么苛刻,国产片这么苛刻？</p>
            <span>11回答</span>
            <p>大家为什么对国产片这么苛刻,这么苛刻</p>
            <span>7回答</span>
            <p>大家为什么对国产片这么苛刻,为什么对国产片这么苛刻？</p>
            <span>19回答</span>
        </div>
        <a href="#">显示更多问答</a>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style  scoped>
    .top img{
        width:100%;
    }
    .top span{
        font-size:0.16rem;
        color:#ccc;
        line-height:0.4rem;
        padding:0 0.2rem;
    }
    .btm p{
        font-size:0.16rem;
        color:#494949;
    }
    .btm span{
        font-size:0.14rem;
        color:#42bd56;
        line-height:0.4rem;
    }
    .btm{
        padding:0 0.2rem;
    }
    a{
        display:block;
        width:100%;
        text-align: center;
        font-size:0.16rem;
        color:#42bd56;
        margin-bottom:0.2rem;
    }
</style>