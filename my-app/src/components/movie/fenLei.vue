<template>
    <div>
        <p>分类浏览</p>
        <ul>
            <li v-for="(v,i) in flarr" :key="i">
                <a :href="v.ahref">{{v.text}}
                    <span></span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flarr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/fenLei"
        }).then((ok)=>{
            // console.log(ok)
            this.flarr = ok.data;
        })
    }
}
</script>

<style scoped>
    p{
        font-size:0.16rem;
        color:#111;
        padding:0 0.16rem;
        height:0.5rem;
        line-height: 0.5rem;
        display:inline-block;
    }
    ul{
        border-top: 1px solid #eee;
        overflow: hidden;
    }
    li{
        float:left;
        width:50%;
        height:0.42rem;
        border-bottom:1px solid #eee;
        border-right:1px solid #eee;
        box-sizing: border-box;
        padding:0 0.18rem;
        font-size: 0.16rem;
    }
    a{
        color: #42bd56;
        line-height:0.42rem;
    }
    span{
        display: inline-block;
        width:0.1rem;
        height:0.1rem;
        float: right;
        margin-top:0.16rem;
        border-right:1px solid #ccc;
        border-bottom:1px solid #ccc;
        transform: rotate(-45deg);
    }
</style>