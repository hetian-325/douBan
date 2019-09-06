<template>
    <div class="box">
        <div class="left">
            <div @click="tX()" class="touBox">
                <img :src="imgs">
                <input type="file" accept="image/*" @change="tP" class="ipt">              
            </div>
            <span @click="fun()">{{text}}</span>
        </div>
        <div class="right">
            <img src="../../static/img/bi.jpg">
            <img src="../../static/img/xj.jpg">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text:'请先登录',
            imgs:"../../static/img/user.jpg"
        }
    },
    methods:{
        tX(){
            $(".ipt").click();
        },
        tP(e){
            let $target = e.target || e.srcElement;
            let file = $target.files[0];

            var reader = new FileReader();
            reader.onload = (data)=>{
                let res = data.target || data.srcElement;
                this.imgs = res.result;
            }
            reader.readAsDataURL(file);
            let imgs = file.name;
            let uname = this.text;
            // console.log(imgs)
            // console.log(uname)
            this.axios({
                method:"get",
                url:"http://localhost:3000/txiang",
                params:{imgs,uname}
            })
        },
        fun(){
            this.$router.push('/denglu');
        }
    },
    created(){
        let token = localStorage.getItem("token");
        if(token){
            this.axios({
                method:"get",
                url:"http://localhost:3000/douban",
                params:{token}
            }).then((ok)=>{
                // console.log(ok)
                if(ok.data.linkid==5){
                    this.text=ok.data.uname;
                    let uname =ok.data.uname;
                    this.axios({
                        method:"get",
                        url:"http://localhost:3000/show",
                        params:{uname}
                    }).then((ok)=>{
                        // console.log(ok)
                        this.imgs=`../../static/image/${ok.data.imgs}`;
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
    .touBox{
        display:inline-block;
    }
    .ipt{
        display:none;
    }
    .box{
        width:100%;
        height:0.6rem;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding:0.1rem 0.18rem;
    }
    .left img{
        width:0.4rem;
        height:0.4rem;
        border-radius:50%;
    }
    .right img{
        width:0.3rem;
        height:0.3rem;
        margin:0 0.05rem;
    }
    span{
        font-size:0.15rem;
        color:#aaa;
        padding-left:0.1rem;
    }
</style>