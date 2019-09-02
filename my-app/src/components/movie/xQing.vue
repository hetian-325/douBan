<template>
    <div>
        这是详情
        {{xqarr}}
    </div>
</template>

<script>
export default {
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