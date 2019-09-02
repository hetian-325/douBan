<template>
    <div class="btnBox">
        <router-link to="/dianying">影院热映</router-link>
        <router-link to="/guangbo">欧美新碟榜</router-link>
        <router-link to="/zhuce">注册账号</router-link>
        <router-link to="/denglu">登录豆瓣</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .btnBox{
        width:3.4rem;
        height:1.06rem;
        margin:0.59rem auto 0;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .btnBox a{
        font-size:0.15rem;
        color:#494949;
        width:1.63rem;
        height:0.44rem;
        border-radius: 0.04rem;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 0.44rem;
    }
</style>