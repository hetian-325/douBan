<template>
    <div class="clear">
        <link-nav></link-nav>
        <xia-zai text="打开APP，浏览更多"></xia-zai>
        <user-bar @zipao="fun"></user-bar>
        <liu-ye :ziarr="fuobj"></liu-ye>
        <my-footer></my-footer>
    </div>
</template>

<script>
import linkNav from '../components/linkNav'
import xiaZai from '../components/xiaZai'
import userBar from '../components/userBar'
import liuYe from '../components/liuYe'
import myFooter from '../components/movie/myFooter'
export default {
    data() {
        return {
            fuobj:[
                {name:"小明",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."},
                {name:"小红",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."},
                {name:"小蓝",time:"2017-03-01 19:30:41",content:"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你..."}
            ]
        }
    },
    components:{
        linkNav,
        xiaZai,
        userBar,
        liuYe,
        myFooter
    },
    methods: {
        fun(val){
            // console.log(val)
            val.filter((v,i)=>{
                this.fuobj.unshift(v)
            })
        }
    }
}
</script>

<style scoped>

</style>