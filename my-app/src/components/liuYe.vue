<template>
    <div>
        <div class="bigBox">
            <a href="#"><img class="imgs" src="../../static/img/footer.png"></a>
            <div class="con">
                <strong>豆瓣<span>写了日记</span></strong>
                <p class="time">2017-03-01 19:30:41</p>
                <div class="btm">
                    <h3>豆瓣App 4.12.0 主要更新</h3>
                    <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
                </div>
                <div class="footer">
                        <img src="../../static/img/01.jpg"><i>6</i>
                        <img src="../../static/img/02.jpg"><i>0</i>
                        <img src="../../static/img/03.jpg"><i>2</i>
                        <img src="../../static/img/04.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
</style>