<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import Main from './view/Main.vue'
	
	export default {
		name: 'app',
		components:{
			Main,
		}
	}
</script>
<style>
</style>


