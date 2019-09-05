<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="聊聊你的观影感受"></xia-zai>
        <xq-con :conarr="xqarr"></xq-con>
        <xq-pl></xq-pl>
        <xq-wd :title="xqarr[0].title"></xq-wd>
        <geng-duo tl="推荐的豆列"></geng-duo>
        <div class="both"></div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../linkNav'
import xiaZai from '../xiaZai'
import xqCon from './xqCon'
import xqPl from './xqPl'
import xqWd from './xqWd'
import gengDuo from './gengDuo'
import myFooter from './myFooter'
export default {
    components:{
        linkNav,
        xiaZai,
        xqCon,
        xqPl,
        xqWd,
        gengDuo,
        myFooter
    },
    data() {
        return {
            xqarr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/dianYing"
        }).then((ok)=>{
            let arr = ok.data;
            this.xqarr = arr.filter((v,i)=>{
                if(v.id==this.$route.params.id){
                    return v
                }
            })
            console.log(this.xqarr)
        })
    }
}
</script>

<style scoped>
    .both{
        width:100%;
        height:1.2rem;
    }
</style>