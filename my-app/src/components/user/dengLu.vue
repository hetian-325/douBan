<template>
    <div>
        <h1>
            <span class="aa" @click="quxiao()">取消</span>
            登录豆瓣
        </h1>
        <div class="iptBox">
            <input v-model="iptc" type="text" placeholder="邮箱">
            <input v-model="iptb" class="bor" :type="bool?'text':'password'" placeholder="密码"> 
            <img :src="bool?'../../../static/img/yj2.png':'../../../static/img/yj.png'" @click="fun()">
            <button @click="denglu()" :style="bgcolor?'background-color:#eee;color:#333;':''">{{text}}</button>
        </div>
        <p>使用其他方式登录 & 找回密码</p>
        <div class="footer">
            <router-link to="/zhuce">注册豆瓣账号</router-link>
            <a href="#">下载豆瓣App</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text:'登录',
            bgcolor:false,
            bool:false,
            iptb:'',
            iptc:''
        }
    },
    methods:{
        fun(){
            this.bool = !this.bool;
        },
        denglu(){
            this.bgcolor = true;
            this.text = '正在登录...';

            var param = new URLSearchParams();
            param.append("email",this.iptc);
            param.append("pwd",this.iptb);

            this.axios({
                method:"post",
                url:"http://localhost:3000/denglu",
                data:param
            }).then((ok)=>{
                    console.log(ok.data)
                    if(ok.data.linkid==2){

                        localStorage.setItem("token",ok.data.token);

                        var i=4;
                        setInterval(()=>{
                            i--;
                            if(i==0){
                                this.$router.push("/douban");
                            }
                            this.text=`登录成功 ${i} 秒后自动跳转`
                        },1000)
                    }else{
                        this.text="登录失败，请重新登录"
                    }
                }
            )
        },
        quxiao(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    div{
        font-size:0px;
    }
    a{
        font-size:0.16rem;
        color:#42bd56;
    }
    .aa{
        font-size:0.16rem;
        color:#42bd56;
        font-weight: normal;
        position:absolute;
        left:0.18rem;
    }
    h1{
        height:0.46rem;
        font-size:0.18rem;
        color:#000;
        text-align: center;
        line-height:0.46rem;
        border-bottom: 0.01rem solid #eee;
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
        top:1.22rem;
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
        font-size:0.16rem;
        color:#aaa;
        text-align: center;
    }
    .footer{
        margin-top:0.3rem;
        text-align: center;
    }
    .footer a{
        margin:0 0.05rem;
    }
</style>