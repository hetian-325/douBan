<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="打开APP，浏览更多"></xia-zai>
        <user-bar></user-bar>
        <liu-ye></liu-ye>
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

</style>