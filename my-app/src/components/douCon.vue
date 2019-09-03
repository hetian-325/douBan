<template>
    <div>
        <div class="media" v-for="(v,i) in arr" :key="i" id="box">
            <div class="media-body">
                <h4 class="media-heading" style="color:#494949;line-height:1.5">{{v.title}}</h4>
                <small style="color:#aaa;line-height:2">{{v.title}}</small>
            </div>
            <div class="media-right media-top">
                <a href="#">
                <img id="imgs" class="media-object" :src="v.image">
                </a>
            </div>
            <div class="btm">
                <small>{{v.category_name}}</small>
                <small>{{v.time_str}}</small>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arr:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/shouYe"
        }).then((ok)=>{
            // console.log(ok)
            this.arr = ok.data;
            // this.arr.forEach((v,i)=>{
            //     let str = v.content.substring(0,35);
            //     this.textarr.push(str)
            // })
        })
    }
}
</script>

<style scoped>
    div{
        margin:0px;
    }
    #imgs{
        width:0.86rem;
        height:0.86rem;
    }
    #box{
        padding:0.25rem 0.18rem 0.1rem;
        position:relative;
    }
    .btm{
        display:flex;
        justify-content: space-between;
        margin:0.2rem 0;
        color:#ccc;
    }
    h4{
        width:2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .conBox{
        position: absolute;
    }
</style>