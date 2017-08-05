<template>
	<div class="level-status">
    	<div class="level" @click="levelChoose">
    		<span><img src="../assets/images/45_66_11.png" id="high-level"></span>
    		<span><img src="../assets/images/45_66_13.png" id="mid-level"></span>
    		<span><img src="../assets/images/45_66_15.png" id="low-level"></span>
    	</div>
    	<div class="status">
    	    <span><img src="../assets/images/45_66_20.png" id="doing"></span>
    		<span><img src="../assets/images/45_66_21.png" id="waiting"></span>
    		<span><img src="../assets/images/45_66_22.png" id="completed"></span>
    	</div>
    </div>
</template>

<script>
	export default {
		name: 'status',
		data () {
            return {

            }
		},
		methods: {
			levelChoose: function(e){
             console.log(e.target);
			}
		}
	}
</script>

<style scoped>
.level {
	display: flex;
	justify-content: space-around;
	height: 80px;
	width: 100%;
    font-size: 40px;
    background: #fcf;   
}
.level img {
    	width: 150px;
    	height: 100%;
}
.status {
	display: flex;
	justify-content: space-around;
	height: 80px;
	width: 100%;
    font-size: 40px;
	background: #ccc;
}
.status img {
    	width: 150px;
    	height: 100%;
}	
</style>