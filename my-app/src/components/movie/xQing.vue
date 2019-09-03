<template>
    <div class="clear">
        <link-nav></link-nav>
        <p>{{xqarr}}</p>
    </div>
</template>

<script>
import linkNav from '../linkNav'
export default {
    components:{
        linkNav
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
        })
    }
}
</script>

<style scoped>

</style>