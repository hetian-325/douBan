<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="打开APP，浏览更多"></xia-zai>
        <user-bar></user-bar>
        <liu-ye></liu-ye>
        <liu-ye></liu-ye>
        <liu-ye></liu-ye>
        <liu-ye></liu-ye>
        <liu-ye></liu-ye>
        <liu-ye></liu-ye>
        <div class="btm">
            <a href="#">显示更多广播</a>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import xiaZai from '../components/xiaZai'
import userBar from '../components/userBar'
import liuYe from '../components/liuYe'
import myFooter from '../components/movie/myFooter'
export default {
    components:{
        linkNav,
        xiaZai,
        userBar,
        liuYe,
        myFooter
    }
}
</script>

<style scoped>
    .btm a{
        display: block;
        padding: 0.15rem 0;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: center;
        color: #42bd56;
    }
</style>