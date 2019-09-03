<template>
    <div class="clear">
        <link-nav></link-nav>
        <!-- <lun-bo></lun-bo> -->
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
// import lunBo from '../components/movie/lunBo'
export default {
    components:{
        linkNav,
        // lunBo
    },
    data() {
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/tuShu"
        }).then((ok)=>{
            console.log(ok)
        })
    }
}
</script>

<style scoped>

</style>