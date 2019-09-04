<template>
    <div class="box">
        <div><img :src="shuarr[0].image"></div>
        <div>
            <h3>
                <span>{{shuarr[0].title}}</span>
                <span>{{shuarr[0].price}}</span>
            </h3>
            <p>{{shuarr[0].publisher}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        shuarr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
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