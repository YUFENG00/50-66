<template>
	<nav>
	    <div id="title">Title</div>
		<router-link tag = "button" to = "/addBtn">Add</router-link>
		<router-view></router-view>
	</nav>
</template>

<script>

	export default {
		name: 'navDiv',
		data () {
			return {

			}
		},
		components: {
		
		}
	}
</script>

<style scoped>
nav {
		position: relative;
		width: 100%;
		height: 100px;
		background: #ccc;
	}
	#title {
		text-align: center;
		padding-top: 20px;
	}
	button {
		position: absolute;
		right: 10%;
		top: 20px;
		font-size: 50px;
	}
</style>