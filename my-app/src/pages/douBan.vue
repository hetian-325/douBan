<template>
    <div>
        <link-nav></link-nav>
        <p>{{text}}</p>
        <link-btn></link-btn>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import linkBtn from '../components/linkBtn'
export default {
    components:{
        linkNav,
        linkBtn
    },
    data(){
        return {
            text:''
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
                    this.text=`欢迎您登录，${ok.data.uname}`
                    setTimeout(()=>{
                        this.text=''
                    },3000)
                }
            })
        }
    }
}
</script>

<style scoped>
    p{
        font-size: 0.16rem;
    }
</style>