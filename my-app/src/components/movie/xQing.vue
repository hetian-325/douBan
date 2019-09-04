<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="聊聊你的观影感受"></xia-zai>
        <xq-con :conarr="xqarr"></xq-con>
    </div>
</template>

<script>
import linkNav from '../linkNav'
import xiaZai from '../xiaZai'
import xqCon from './xqCon'
export default {
    components:{
        linkNav,
        xiaZai,
        xqCon
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

</style>