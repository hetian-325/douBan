<template>
    <div class="box" @click="fun()">
        <div class="left">
            <img src="../../static/img/user.jpg">
            <span>请先登录</span>
        </div>
        <div class="right">
            <img src="../../static/img/bi.jpg">
            <img src="../../static/img/xj.jpg">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        fun(){
            this.$router.push('/denglu');
        }
    }
}
</script>

<style scoped>
    .box{
        width:100%;
        height:0.6rem;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding:0.1rem 0.18rem;
    }
    .left img{
        width:0.4rem;
        height:0.4rem;
        border-radius:50%;
    }
    .right img{
        width:0.3rem;
        height:0.3rem;
        margin:0 0.05rem;
    }
    span{
        font-size:0.15rem;
        color:#aaa;
        padding-left:0.1rem;
    }
</style>