<template>
    <div class="navBox">
        <div class="leftNav">
            <router-link to="/douban">豆瓣</router-link>
        </div>
        <div class="rightNav">
            <router-link to="/dianying">电影</router-link>
            <router-link to="/tushu">图书</router-link>
            <router-link to="/guangbo">广播</router-link>
            <router-link to="/xiaozu">小组</router-link>
            <router-link to="/sousuo"><img src="../../static/img/1.jpg"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div{
        font-size:0px;
    }
    .navBox{
        width:100%;
        height:0.49rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: .01rem solid #f3f3f3;
        padding:0 0.18rem;
        position:fixed;
        top:0px;
        background-color: #fff;
    }
    .leftNav a{
        font-size:0.24rem;
        color:#05b512;
        font-weight: bolder;
    }
    .rightNav a{
        font-size:0.15rem;
        margin-right:0.15rem;
    }
    .rightNav img{
        position: absolute;
        top:0.1rem;
        right:0.1rem;
    }
    .rightNav a:nth-child(1){
        color:#2384e8;
    }
    .rightNav a:nth-child(2){
        color:#9f7860;
    }
    .rightNav a:nth-child(3){
        color:#e4a813;
    }
    .rightNav a:nth-child(4){
        color:#2ab8cc;
    }
</style>