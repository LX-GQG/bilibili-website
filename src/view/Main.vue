<template>
	<div id="main">
		<blheader></blheader>
		<shuffling></shuffling>
		<classify></classify>
		<mainzhuye></mainzhuye>
		
	</div>
</template>

<script>
	import blheader from '@/view/Blheader'
	import shuffling from '@/view/Shuffling'
	import classify from '@/view/Classify'
	import mainzhuye from '@/view/Mainzhuye'
	
	export default {
		data() {
			return {};
		},
		components:{
			blheader,
			shuffling,
			classify,
			mainzhuye,
			
		},
		methods: {
			isMobile() {
				this.flag = navigator.userAgent.match(
					/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
				);
					console.log(this.flag);
					if(this.flag === null) {
						console.log("pc端");
						
						this.rightNavShow = true;
					}else {
						console.log("移动端");
						window.location.href = 'http://127.0.0.1:8848/bilibili/static/Phonemain.html'
						this.rightNavShow = false;
					}
				}
			},
	};
</script>

<style>
	ul li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: black;
	}
	body {
		color: #222;
		font-size: 12px;
		line-height: 1.7em;
		margin: 0;
		overflow-y: scroll;
	}
</style>
