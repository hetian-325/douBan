<template>
    <div class="clear">
        <link-nav></link-nav>
        <lun-bo :ziarr="arra" tl="影院热映"></lun-bo>
        <lun-bo :ziarr="arrb" tl="免费在线观影"></lun-bo>
        <lun-bo :ziarr="arrc" tl="新片速递"></lun-bo>
        <geng-duo tl="发现好电影"></geng-duo>
        <fen-lei></fen-lei>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import lunBo from '../components/movie/lunBo'
import gengDuo from '../components/movie/gengDuo'
import fenLei from '../components/movie/fenLei'
import myFooter from '../components/movie/myFooter'
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
        fenLei,
        myFooter
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

</style>