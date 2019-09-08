<template>
    <div>
        <h1>欢迎加入豆瓣</h1>
        <div class="iptBox">
            <input v-model="iptc" type="text" placeholder="邮箱">
            <input v-model="iptb" class="bor" :type="bool?'text':'password'" placeholder="密码"> 
            <input v-model="ipta" class="bor" type="text" placeholder="用户名">
            <img :src="bool?'static/img/yj2.png':'static/img/yj.png'" @click="fun()">
            <button @click="zhuce()" :style="bgcolor?'background-color:#eee;color:#333;':''" v-html="text"></button>
        </div>
        <p>点击「注册」代表你已阅读并同意用户使用协议</p>
        <a href="#">下载豆瓣App</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text:'注册',
            bgcolor:false,
            bool:false,
            ipta:'',
            iptb:'',
            iptc:'',
        }
    },
    methods:{
        fun(){
            this.bool = !this.bool;
        },
        zhuce(){
            this.bgcolor = true;
            this.text = `<img style="width:0.3rem;" src="static/img/loading.gif" />`;
            // this.axios({
            //     method:"get",
            //     url:"http://localhost:3000/zhuce",
            //     params:{uname:this.ipta,pwd:this.iptb,email:this.iptc}
            // }).then((ok)=>{
            //         // console.log(ok.data.linkid)
            //         if(ok.data.linkid==0){
                        var i=3;
                        setInterval(()=>{
                            i--;
                            if(i==0){
                                this.$router.push("/denglu");
                            }
                        },1000)
            //         }else if(ok.data.linkid==1){
            //             this.text="不好意思，该用户名已注册"
            //         }
            //     }
            // )
        }
    }
}
</script>

<style scoped>
    div{
        font-size:0px;
    }
    h1{
        font-size: 0.4rem;
        font-weight: normal;
        color:#42bd56;
        text-align: center;
        margin:0.37rem 0 0.33rem;
    }
    .iptBox{
        width:100%;
        padding:0.2rem 0;
        text-align: center;
        
    }
    .iptBox .bor{
        border-top:none;
    }
    .iptBox input{
        width:3.45rem;
        height:0.44rem;
        outline: none;
        border:none;
        border:0.01rem solid #ccc;
        border-top-left-radius: 0.04rem;
        border-top-right-radius: 0.04rem;
        text-indent: 0.1rem;
        font-size: 0.16rem;
    }
    img{
        width:0.25rem;
        height:0.25rem;
        position:absolute;
        top:1.86rem;
        right:0.3rem;
    }
    button{
        width:3.45rem;
        height:0.45rem;
        background-color: #42bd56;
        border-radius: 0.04rem;
        border:none;
        font-size:0.16rem;
        color:#fff;
        outline: none;
        margin-top:0.1rem;
    }
    p{
        font-size:0.14rem;
        color:#aaa;
        text-align: center;
    }
    a{
        font-size: 0.16rem;
        color:#42bd56;
        display:block;
        text-align: center;
        margin-top:0.3rem;
    }
</style>