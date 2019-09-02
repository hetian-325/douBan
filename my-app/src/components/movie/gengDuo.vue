<template>
    <div>
        <ul>
            <li v-for="(v,i) in gdarr" :key="i">
                <a :href="v.href">{{v.title}}</a>
            </li><br v-if="bool">
        </ul>
    </div>
</template>

<script>
export default {
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
    ul{
        overflow-x:auto;
        white-space: nowrap;
    }
    li{
        display: inline-block;
        border:1px solid rgb(255, 172, 45);
        border-radius: 0.04rem;
        margin:0 0 0.08rem 0.16rem;
        font-size:0.16rem;
    }
    a{
        display:block;
        height:0.5rem;
        line-height: 0.5rem;
        padding:0 0.24rem;
        letter-spacing: 0.02rem;
    }
</style>