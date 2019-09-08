<template>
        <div class="header">
            <span @click="fun()">关闭</span>
            <div @click="funb()">
            <input type="text" @focus="funa()" @blur="funa()">
            <img src="../../static/img/search.png" v-if="bool">
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            bool:true
        }
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        funa(){
            this.bool = !this.bool;
        },
        funb(){
            this.$router.push('/more');
        }
    }
}
</script>

<style scoped>
    .header{
        width:100%;
        height:0.49rem;
        background-color:#fff;
        padding:0 0.18rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    span{
        color: #42bd56;
        font-size: 0.16rem;
    }
    input{
        width:2.97rem;
        height:0.32rem;
        background-color:#f3f3f3;
        border-radius: 0.03rem;
        border:none;
        text-indent: 0.05rem;
    }
    img{
        width:0.2rem;
        position:absolute;
        top:0.14rem;
        right:1.6rem;
    }
</style>