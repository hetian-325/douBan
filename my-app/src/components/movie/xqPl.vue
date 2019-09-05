<template>
    <div>
        <div>
            <input type="text" v-model="text">
            <button @click="fun()">评论</button>
        </div>
        <div class="bigBox" v-for="(v,i) in obj" :key="i">
            <a href="#" class="tou"><img class="imgs" src="../../../static/img/footer.png"></a>
            <div class="con">
                <strong>{{v.name}}</strong>
                <p class="time">{{v.time}}</p>
                <div class="btm">
                    <p>{{v.content}}</p>
                </div>
                <div class="footer">
                        <img @click="num++" src="../../../static/img/01.jpg"><i>{{num}}</i>
                        <img src="../../../static/img/04.jpg">
                </div>
            </div>
        </div>
        <div><a class="ahref" href="#">显示更多评论</a></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num:0,
            text:'',
            obj:[
                {name:"小明",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."},
                {name:"小红",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."},
                {name:"小蓝",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."}
            ]
        }
    },
    methods: {
        fun(){
            var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1).toString().padStart(2,'0');
            var day = dt.getDate().toString().padStart(2,'0');
            var hh = dt.getHours().toString().padStart(2,'0');
            var mm = dt.getMinutes().toString().padStart(2,'0');
            var ss = dt.getSeconds().toString().padStart(2,'0');

            let pattern=`${year}-${month}-${day} ${hh}:${mm}:${ss}`

            let token = localStorage.getItem("token");
            if(token){
                this.axios({
                    method:"get",
                    url:"http://localhost:3000/douban",
                    params:{token}
                }).then((ok)=>{
                    // console.log(ok)
                    if(ok.data.linkid==5){
                        var str=ok.data.uname
                        this.obj.unshift({name:str,time:pattern,content:this.text});
                        this.text=''
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
    .tou{
        height:0.4rem;
    }
    .bigBox{
        height:1.8rem;
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
    .time{
        font-size: 0.14rem;
        color:#aaa;
    }
    .btm{
        padding:0.15rem;
    }
    .btm p{
        font-size: 0.14rem;
        color:#333;
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
        text-align: center;
        font-size:0.16rem;
        color:#42bd56;
        padding:0.2rem 0;
    }
</style>