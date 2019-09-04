<template>
    <div class="clear">
        <link-nav></link-nav>
        <shu-bo :ziarr="arra" tl="最受关注图书 | 虚构类"></shu-bo>
        <shu-bo :ziarr="arrb" tl="最受关注图书 | 非虚构类"></shu-bo>
        <shu-bos :ziarr="arrc" tl="豆瓣纸书"></shu-bos>
        <good-book tl="发现好书"></good-book>
        <fen-lei></fen-lei>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import shuBo from '../components/book/shuBo'
import shuBos from '../components/book/shuBos'
import goodBook from '../components/book/goodBook'
import fenLei from '../components/movie/fenLei'
import myFooter from '../components/movie/myFooter'
export default {
    components:{
        linkNav,
        shuBo,
        shuBos,
        goodBook,
        fenLei,
        myFooter
    },
    data() {
        return {
            arr:[],
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/tuShu"
        }).then((ok)=>{
            console.log(ok)
            this.arr = ok.data;
        })
    },
    computed: {
        arra(){
            return this.arr.slice(0,13);
        },
        arrb(){
            return this.arr.slice(13,27);
        },
        arrc(){
            return this.arr.slice(27,40);
        }
    }
}
</script>

<style scoped>

</style>