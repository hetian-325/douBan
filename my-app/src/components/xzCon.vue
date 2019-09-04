<template>
    <div>
        <ul>
            <h3>{{top}}</h3>
            <li v-for="(v,i) in ziarr" :key="i">
                <div class="top">
                    <img :src="v.images.small">
                    <span>{{v.title}}</span>
                    <span>{{v.group_member}}人</span>
                </div>
                <div class="btm">
                    <span>{{v.group_topic.time}}</span>
                    <span>{{v.group_topic.title}}</span>
                </div>
            </li>
        </ul>
        <a class="more" href="#">{{btm}}</a>
    </div>
</template>

<script>
export default {
    props:{
        ziarr:{
            type:Array,
            required:true
        },
        top:{
            type:String,
            required:true
        },
        btm:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
    h3{
        font-size:0.16rem;
        color:#111;
    }
    ul{
        margin:0.3rem 0 0;
        padding-left: 0.14rem;
    }
    li{
        padding:0.1rem 0;
        border-bottom: 0.01rem solid #ccc;
    }
    .top{
        padding-right:0.2rem;
    }
    .top img{
        width:0.4rem;
        height:0.4rem;
    }
    .top span:nth-child(2){
        font-size:0.18rem;
        color:#111;
        vertical-align: middle;
        margin-left:0.05rem;
    }
    .top span:nth-child(3){
        font-size:0.15rem;
        color:#ccc;
        float:right;
        line-height: 0.4rem;
    }
    .btm{
        display:flex;
    }
    .btm span{
        font-size:0.15rem;
        color:#aaa;
        line-height: 0.4rem;
        flex-shrink: 0;
    }
    .btm span:last-child{
        width:1.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .more{
        display: block;
        padding: 0.15rem 0;
        margin-bottom:0.2rem;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: center;
        color: #42bd56;
    }
</style>