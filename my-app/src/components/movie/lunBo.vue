<template>
    <div>
        <div class="lbBox">
            <div class="con" v-for="(v,i) in ziarr" :key="i">
                <router-link :to="{name:'xQing',params:{id:v.id}}">
                    <img :src="v.images.small">
                    <p>{{v.title}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        ziarr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
    .lbBox{
        width:100%;
        display:flex;
        overflow:auto;
    }
    .con{
        margin:0 0.05rem;
    }
    .con img{
        width:1.2rem;
        height:1.7rem;
    }
    .con p{
        font-size:0.16rem;
        text-align:center;
        line-height:0.3rem;
    }
</style>