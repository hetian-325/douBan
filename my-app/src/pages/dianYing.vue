<template>
    <div class="clear">
        <link-nav></link-nav>
        <div class="top">
            <span>影院热映</span>
            <a href="#">更多</a>
        </div>
        <lun-bo :ziarr="arra"></lun-bo>
        <div class="top">
            <span>免费在线观影</span>
            <a href="#">更多</a>
        </div>
        <lun-bo :ziarr="arrb"></lun-bo>
        <div class="top">
            <span>新片速递</span>
            <a href="#">更多</a>
        </div>
        <lun-bo :ziarr="arrc"></lun-bo>
        <div class="top">
            <span>发现好电影</span>
            <a href="#">更多</a>
        </div>
        <geng-duo></geng-duo>
        <fen-lei></fen-lei>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import lunBo from '../components/movie/lunBo'
import gengDuo from '../components/movie/gengDuo'
import fenLei from '../components/movie/fenLei'
export default {
    data(){
        return {
            fuarr:[]
        }
    },
    components:{
        linkNav,
        lunBo,
        gengDuo,
        fenLei
    },
    created() {
        this.axios({
            method:"get",
            url:"/dianYing"
        }).then((ok)=>{
            // console.log(ok)
            this.fuarr = ok.data;
        })
    },
    computed:{
        arra(){
            return this.fuarr.slice(0,33);
        },
        arrb(){
            return this.fuarr.slice(33,66);
        },
        arrc(){
            return this.fuarr.slice(66,99);
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
</style>