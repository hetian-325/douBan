<template>
    <div>
        <div class="bigBox" v-for="(v,i) in ziarr" :key="i">
            <a href="#"><img class="imgs" src="../../static/img/footer.png"></a>
            <div class="con">
                <strong>{{v.name}}<span>写了日记</span></strong>
                <p class="time">{{v.time}}</p>
                <div class="btm">
                    <h3>豆瓣App 4.12.0 主要更新</h3>
                    <p>{{v.content}}</p>
                </div>
                <div class="footer">
                        <img src="../../static/img/01.jpg"><i>6</i>
                        <img src="../../static/img/02.jpg"><i>0</i>
                        <img src="../../static/img/03.jpg"><i>2</i>
                        <img src="../../static/img/04.jpg">
                </div>
            </div>
        </div>
        <div><a class="ahref" href="#">显示更多广播</a></div>
    </div>
</template>

<script>
export default {
    props:{
        ziarr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .bigBox{
        height:2.22rem;
        margin:0.2rem 0.18rem;
        border-bottom: 0.01rem solid #f3f3f3;
        display:flex;
    }
    .imgs{
        width:0.4rem;
        border-radius:50%;
        margin-right: 0.1rem;
    }
    strong{
        font-size: 0.17rem;
        color:#494949;
    }
    strong span{
        font-size: 0.17rem;
        color:#aaa;
        font-weight:100;
    }
    .time{
        font-size: 0.14rem;
        color:#aaa;
    }
    .btm{
        width:2.9rem;
        height:1rem;
        margin:0.1rem 0 0.2rem;
        padding:0.15rem;
        border-radius: 0.02rem;
        border: 0.01rem solid #d8d8d8;
    }
    .btm h3{
        font-size: 0.17rem;
        color:#494949;
    }
    .btm p{
        font-size: 0.12rem;
        color:#aaa;
    }
    .footer img:last-child{
        float:right;
    }
    i{
        font-style: normal;
        font-size:0.14rem;
        color:#ccc;
        margin:0 0.2rem 0 0.05rem;
        vertical-align: middle;
    }
    .ahref{
        display: block;
        padding: 0.15rem 0;
        font-size: 0.16rem;
        line-height: 0.18rem;
        text-align: center;
        color: #42bd56;
    }
</style>