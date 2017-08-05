<template>
	<div>
		<nav>
			<router-link tag='button' to='/all'>Cancel</router-link>
			<span id="title">Title</span>
			<router-link tag='button' to='/all' @click.native="doSth">Done</router-link>
		</nav>
		<status></status>
		<textarea id="newText"></textarea>
	</div>
</template>

<script>
    import allDiv from './all'
    import status from './status'
    import $ from 'jquery'

    
	export default {
		name: 'addBtn',
		data () {
			return {

			}
		},
		components: {
			status
		},
		methods: {
			doSth: function() {
			let addTask = allDiv.methods.getNode().cloneNode(true);
			// console.log(addTask);
			// 问题：获取不到节点
			let newText = $("#newText").val();
			console.log(newText);
			}
		}
	}
</script>
<style scoped>
nav {
	position: relative;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 100px;
	background: #ccc;
}
#title {
	margin-top: 20px;
	text-align: center;
}
button {
	height: 80px;
	margin-top: 10px;
	font-size: 50px;
}
textarea {
	width: 100%;
	height: 400px;
	font-size: 50px;
	margin: 10px;
}

</style>