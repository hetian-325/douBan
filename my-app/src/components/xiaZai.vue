<template>
    <div>
        <div class="imgs"><img src="../../static/img/bg.jpg" width="100%"></div>
        <div class="text">
            <span>每天看点好内容</span>
            <div class="con">
                <span>极速下载</span>
                <span>打开</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .imgs{
        width:100%;
        height:0.8rem;
        position:absolute;
        z-index: -1;
    }
    .text{
        width:100%;
        height:0.8rem;
        padding:0 0.1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .text>span{
        color:#2ca532;
        padding-left:0.18rem;
    }
    span{
        display:inline-block;
    }
    .con span{
        padding: 0 0.14rem;
        font-size: 0.13rem;
        font-weight: 800;
        line-height: 2;
        border: 0.01rem solid #42bd56;
        border-radius: 0.03rem;
        color:#42bd56;
    }
    .con span:first-child{
        color: #fff;
        background: #42bd56;
    }
</style>