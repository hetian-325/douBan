<template>
    <div>
        <link-nav></link-nav>
        <p id="text"></p>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
export default {
    components:{
        linkNav
    },
    created() {
        $(function(){
            $('#text').html('这是电影')
        })
    }
}

</script>

<style scoped>

</style>