<template>
    <div>
        <span v-for="(v,i) in starArr" :class="v" :key="i"></span>
    </div>
</template>

<script>
export default {
    props:{
        num:{
            type:Number,
            required:true
        }
    },
    computed:{
        starArr(){
            let arrClass=[];
            let onstar = parseInt(this.num/2);
            // 整星
            for(var i=0;i<onstar;i++){
                arrClass.push('on_star');
            }
            // 半星
            let half = this.num-onstar;
            if(half>=0.5){
                arrClass.push('half_star');
            }
            // 灰星
            while(arrClass.length<5){
                arrClass.push('off_star')
            }

            return arrClass;
        }
    }
}
</script>
<style scoped>
    div{
        display: inline-block;
    }
    .half_star{
		width:0.15rem;
		height: 0.15rem;
		display: inline-block;
		background: url(../../static/img/1.png);
		background-size: 100%;
	}
	.on_star{
		width:0.15rem;
		height: 0.15rem;
		display: inline-block;
		background: url(../../static/img/2.png);
		background-size: 100%;
	}
	.off_star{
		width:0.15rem;
		height: 0.15rem;
		display: inline-block;
		background: url(../../static/img/0.png);
		background-size: 100%;
	}
</style>