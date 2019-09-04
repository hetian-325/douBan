<template>
    <div class="clear">
        <link-nav></link-nav>
        <user-bar></user-bar>
        <xz-con :ziarr="arra" top="租房找室友" btm="更多相关小组"></xz-con>
        <xz-con :ziarr="arrb" top="来聊五块钱" btm="来聊五块钱"></xz-con>
        <xz-con :ziarr="arrc" top="买买买" btm="更多相关小组"></xz-con>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import userBar from '../components/userBar'
import xzCon from '../components/xzCon'
import myFooter from '../components/movie/myFooter'
export default {
    components:{
        linkNav,
        userBar,
        xzCon,
        myFooter
    },
    data() {
        return {
            arra:[],
            arrb:[],
            arrc:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/xiaoZu"
        }).then((ok)=>{
            console.log(ok)
            this.arra = ok.data.xiaozua;
            this.arrb = ok.data.xiaozub;
            this.arrc = ok.data.xiaozuc;
        })
    }
}
</script>

<style scoped>

</style>