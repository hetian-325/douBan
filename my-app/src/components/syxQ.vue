<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="每天看点好内容"></xia-zai>
        <div v-for="(v,i) in syarr" :key="i" class="box">
            <h2>{{v.title}}
                <span>{{v.loc_name}}</span>
            </h2>
            <div class="imgs"><img :src="v.image"></div>
            <div class="time">
                <span>时间：</span>
                <ul>
                    <li>{{v.time_str}}</li>
                    <li>{{v.end_time}}</li>
                </ul>
            </div>
            <div class="time">
                <span>地点：</span>
                <ul>
                    <li>{{v.address}}</li>
                </ul>
            </div>
            <div class="time">
                <span>费用：</span>
                <ul>
                    <li>{{v.price_range}}</li>
                </ul>
            </div>
            <div class="time">
                <span>类型：</span>
                <ul>
                    <li>{{v.category_name}}</li>
                </ul>
            </div>
            <div class="time">
                <span>起始时间：</span>
                <ul>
                    <li>{{v.time_str}}</li>
                </ul>
            </div>
            <div class="content">
                <h3>活动详情</h3>
                <p>{{v.content}}</p>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from './linkNav'
import xiaZai from './xiaZai'
import myFooter from './movie/myFooter'
export default {
    components:{
        linkNav,
        xiaZai,
        myFooter
    },
    data() {
        return {
            syarr:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/shouYe"
        }).then((ok)=>{
            this.syarr = ok.data.filter((v,i)=>{
                if(v.id==this.$route.params.id){
                    return v
                }
            })
        })
    }
}
</script>

<style scoped>
    .box{
        width:100%;
        padding:0.1rem;
    }
    h2{
        font-size:0.16rem;
        color:#494949;
        margin:0.2rem 0;
        font-weight: bold;
    }
    h2 span{
        display: inline-block;
        padding: 0.01rem 0.05rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #fff;
        background-color: #ff8263;
        border-radius: 0.02rem;
    }
    .imgs{
        margin:0.2rem 0;
        text-align: center;
    }
    .imgs img{
        width:100%;
        max-width: 2.2rem;
    }
    .time{
        width:100%;
        margin:0.1rem 0;
        display:flex;
    }
    .time span{
        color:#666;
        flex-shrink: 0;
    }
    .content h3{
        color: #072;
        font-size:0.16rem;
        font-weight: bolder;
        margin:0.2rem 0;
    }
    .content p{
        overflow: hidden;
    }
</style>