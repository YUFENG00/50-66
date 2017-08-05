<template>
<div id="one-thing">
	    <navDiv></navDiv>
		<h2>Now!The One Thing is</h2>
		<!-- <div>some task some task some task</div> -->
		{{ oneTask() }}
</div>	
</template>

<script>
    import navDiv from './navDiv'
    import allDiv from './all'

    
    export default {
        name: 'oneThing',
	    data () {
			return {

			}
		},
		components: {
			navDiv
		},
		methods: {
			oneTask: function() {
			  let onething = allDiv.methods.getNode();
			  return onething;	
			}
		}
    }
</script>

<style scoped>
	
</style>