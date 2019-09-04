<template>
    <div class="box">
        <div class="con">
            <router-link to="/zhuce">注册账号</router-link>
            <router-link to="/denglu">登录豆瓣</router-link>
        </div>
        <div class="con">
            <router-link to="#">使用桌面版</router-link>
            <router-link to="#">使用豆瓣APP</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .box{
        border-top: 0.01rem solid #f3f3f3;
    }
    .con{
        padding:0.13rem 0;
        display:flex;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    a{
        width: 50%;
        box-sizing: border-box;
        font-size: 0.15rem;
        color: #42bd56;
        text-align:center;
    }
    .con a:first-child{
        border-right: 0.01rem solid #e5e5e5;
    }
</style>