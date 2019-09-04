<template>
    <div>
        <ul>
            <li v-for="(v,i) in arr" :key="i">
                <router-link :to="v.href">
                    <h3 :style="{color:v.col}">{{v.tit}}</h3>
                    <span>{{v.jieshi}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/toggle"
        }).then((ok)=>{
            this.arr = ok.data;
        })
    }
}
</script>

<style scoped>
    ul{
        width:100%;
        display:flex;
        flex-wrap: wrap;
    }
    li{
        width:33%;
        padding:0.15rem 0;
        text-align:center;
    }
    span{
        font-size:0.12rem;
        color:#999;
    }
</style>