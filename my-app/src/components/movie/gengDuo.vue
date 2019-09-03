<template>
    <div>
        <div class="top">
            <span>{{tl}}</span>
            <a href="#">更多</a>
        </div>
        <div class="box">
            <a v-for="(v,i) in gdarr" :key="i" :href="v.href" :style="{color:v.color}" v-if="!v.line">
                {{v.title}}
            </a>
            <br v-else>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tl:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            gdarr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/faxianDY"
        }).then((ok)=>{
            this.gdarr=ok.data;
        })
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
    .box{
        width:100%;
        overflow-x:auto;
        white-space: nowrap;
        float:left;
    }
    .box a{
        display: inline-block;
        height:0.5rem;
        line-height: 0.5rem;
        padding:0 0.24rem;
        margin:0 0 0.08rem 0.16rem;
        border:1px solid rgb(255, 172, 45);
        border-radius: 0.04rem;
        font-size:0.16rem;
        letter-spacing: 0.02rem;
    }
</style>