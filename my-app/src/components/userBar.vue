<template>
<div>
    <div class="box">
        <div class="left">
            <div @click="tX()" class="touBox">
                <img :src="imgs">
                <input type="file" accept="image/*" @change="tP" class="ipt">              
            </div>
            <span @click="fun()">{{text}}</span>
        </div>
        <div class="right">
            <img src="../../static/img/bi.jpg" @click="shuru()">
            <img src="../../static/img/xj.jpg">
        </div>
    </div>
    <div class="plBox" v-if="bool">
        <textarea v-model="ipts" class="ipts" @focus="ipts=''"></textarea>
        <button id="btns" @click="fabiao()" type="button" class="btn btn-success">发表</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            text:'请先登录',
            imgs:"../../static/img/user.jpg",
            bool:false,
            ipts:'记录你的生活...',
            ziobj:[]
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
            // this.axios({
            //     method:"get",
            //     url:"http://localhost:3000/txiang",
            //     params:{imgs,uname}
            // })
        },
        fun(){
            this.$router.push('/denglu');
        },
        shuru(){
            this.bool = !this.bool;
        },
        fabiao(){
            var dt = new Date();
            var year = dt.getFullYear();
            var month = (dt.getMonth() + 1).toString().padStart(2,'0');
            var day = dt.getDate().toString().padStart(2,'0');
            var hh = dt.getHours().toString().padStart(2,'0');
            var mm = dt.getMinutes().toString().padStart(2,'0');
            var ss = dt.getSeconds().toString().padStart(2,'0');
            let pattern=`${year}-${month}-${day} ${hh}:${mm}:${ss}`

            this.ziobj.push({name:"str",time:pattern,content:this.ipts});
            this.ipts=''

            this.$emit('zipao',this.ziobj);
        }
    },
    created(){
        // let token = localStorage.getItem("token");
        // if(token){
        //     this.axios({
        //         method:"get",
        //         url:"http://localhost:3000/douban",
        //         params:{token}
        //     }).then((ok)=>{
        //         // console.log(ok)
        //         if(ok.data.linkid==5){
        //             this.text=ok.data.uname;
        //             let uname =ok.data.uname;
        //             this.axios({
        //                 method:"get",
        //                 url:"http://localhost:3000/show",
        //                 params:{uname}
        //             }).then((ok)=>{
        //                 // console.log(ok)
        //                 this.imgs=`../../static/image/${ok.data.imgs}`;
        //             })
        //         }
        //     })
        // }
    }
}
</script>

<style scoped>
    #btns{
        float:right;
        margin-top:0.22rem;
    }
    .plBox{
        width:100%;
        padding:0.1rem 0.2rem;
    }
    .ipts{
        resize: none;
        width:80%;
        height:0.8rem;
        border:none;
        border:0.01rem solid #ccc;
        border-radius:0.06rem;
        outline:none;
    }
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