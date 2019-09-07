<template>
    <div class="box">
        <div><img :src="shuarr[num].image"></div>
        <div class="shuBox">
            <h3>
                <span>{{shuarr[num].title}}</span>
                <span>{{shuarr[num].price}}</span>
            </h3>
            <p>{{shuarr[num].publisher}}</p>
            <button @click="fun()" id="btn" type="button" class="btn btn-info">下一本</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:0
        }
    },
    props:{
        shuarr:{
            type:Array,
            required:true
        }
    },
    methods:{
        fun(){
            this.num++
            if(this.num>12){
                this.num=0
            }
        }
    }
}
</script>

<style scoped>
    .shuBox{
        position:relative;
        width:2.23rem;
    }
    #btn{
        position:absolute;
        right:0;
        bottom:0;
        outline: none;
    }
    .box{
        width:100%;
        display:flex;
        padding:0.1rem;
    }
    h3{
        font-size:0.2rem;
        color:#494949;
        padding-top:0.1rem;
    }
    h3 span:last-child{
        color: #e76648;
        font-size: 0.16rem;
        margin-left:0.2rem;
    }
    p{
        color: #9b9b9b;
        line-height: 0.5rem;
    }
    img{
        width:1.2rem;
        height:1.7rem;
        margin-right:0.1rem;
    }
</style>