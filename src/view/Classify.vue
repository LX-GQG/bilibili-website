<template>
	<div class="navigation">
		<div class="om">
			<div class="n-inner clearfix">
				<div class="n-tab-links">
					<router-link :to="{ path: '/Main' }"><a href="" class="n-btn" id="xian">
						<span class="iconfont ic_home"></span>
						<span class="n-text" style="color: #00a1d6;" >主页</span>
					</a></router-link>
					<router-link :to="{ path: '/Tab' }"><a href="" class="n-btn tabxianshi">
						<span class="iconfont ic_following"></span>
						<span class="n-text">动态</span>
					</a></router-link>
					<router-link :to="{ path: '/Video' }"><a href="" class="n-btn videoxianshi">
						<span class="iconfont ic_video"></span>
						<span class="n-text">投稿</span>
					</a></router-link>
					<router-link :to="{ path: '/Channel' }"><a href="" class="n-btn channelxs">
						<span class="iconfont ic_channel"></span>
						<span class="n-text">频道</span>
					</a></router-link>
					<router-link :to="{ path: '/Collect' }"><a href="" class="n-btn collectxs">
						<span class="iconfont ic_collect"></span>
						<span class="n-text">收藏</span>
					</a></router-link>
				</div>
				<div class="clearfix g-search">
					<input type="text" placeholder="搜索视频" class="space_input">
					<span class="icon1 search-btn"></span>
				</div>
				<div class="n-statistics">
					<a href="/488524310/fans/follow" class="n-data n-gz" title="8">
					<p class="n-data-k">关注数</p>
					<p id="n-gz" class="n-data-v space-attention">8</p></a>
					<a href="/488524310/fans/fans" class="n-data n-fs" title="407"><p class="n-data-k">粉丝数</p>
					<p id="n-fs" class="n-data-v space-fans">407</p></a>
				</div>
				<div class="n-cursor" style="width: 45px; left: 30px;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {}
		},
		methods: {},
	}
</script>

<style>
	.navigation{
		margin-bottom: 10px;
	}
	.om {
		width: 1281px!important;
		margin: 0 auto;
		position: relative;
	}
	.n-inner {
		
		height: 66px;
		background: #fff;
		box-shadow: 0 0 0 1px #eee;
		border-radius: 0 0 4px 4px;
		padding: 0 20px;
		font-size: 0;
	}
	.clearfix {
		display: block;
	}
	.n-tab-links {
		display: inline-block;
		font-size: 0;
		vertical-align: middle;
		position: relative;
	}
	.n-btn {
		display: inline-block;
		font-size: 0;
		line-height: 66px;
		position: relative;
		margin-right: 31px;
		margin-left: 31px;
		
	}
	.iconfont {
		display: inline-block;
		width: 20px;
		font-size: 20px;
		margin-right: 4px;
		vertical-align: middle;
	}
	.n-btn.active {
		color: #00a1d6;
	}
	.n-text {
		vertical-align: middle;
		font-size: 13px;
	}
	.ic_home{
		width: 15px;
		height: 19px;
		line-height: 19px;
		position: absolute;
		background-image: url(../assets/images/home.png);
		top: 24px;
		left: -19px;
		background-position: 198px 95px;
		background-size: 20px;
	}
	.ic_following{
		width: 15px;
		height: 15px;
		position: absolute;
		background-image: url(../assets/images/Tab.png);
		top: 25px;
		left: -19px;
		background-position: 197px 98px;
		background-size: 14px;
	}
	.ic_video{
		width: 15px;
		height: 15px;
		position: absolute;
		background-image: url(../assets/images/bindao.png);
		top: 25px;
		left: -19px;
		background-position: 198px 95px;
		background-size: 20px;
	}
	.ic_channel{
		width: 15px;
		height: 15px;
		position: absolute;
		background-image: url(../assets/images/channle.png);
		top: 25px;
		left: -19px;
		background-position: 197px 98px;
		background-size: 20px;
	}
	.ic_collect{
		width: 15px;
		height: 15px;
		position: absolute;
		background-image: url(../assets/images/icons.png);
		top: 25px;
		left: -19px;
		background-position: 493px 943px;
		background-size: 900px;
	}
	.g-search {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 30px;
		vertical-align: middle;
		top: -46px;
		right: -447px;
	}
	.g-search input {
		position: absolute;
		height: 30px;
		width: 100px;
		padding: 0 29px 0 10px;
		line-height: 30px;
		color: #222;
		font-size: 12px;
		border: 1px solid #ccd0d7;
		border-radius: 15px;
		box-shadow: none;
		box-sizing: border-box;
	}
	.search-btn {
		position: absolute;
		right: 8px;
		top: 0;
		width: 18px;
		height: 30px;
		background-position: -506px -458px;
		background-image: url(/img/icons.fd3fc464.png);
		background-size: 1027px;
		cursor: pointer;
	}
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
		
	}
	.n-statistics {
		position: absolute;
		float: right;
		height: 66px;
		top: 0;
		right: 33px;
	}
	.n-data {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-direction: column;
		flex-direction: column;
		-ms-flex-pack: center;
		justify-content: center;
		float: left;
		width: 58px;
		height: 66px;
		padding: 10px 0;
		text-align: center;
		box-sizing: border-box;
	}
	.n-data-k {
		line-height: 14px;
		font-size: 12px;
		color: #99a2aa;
	}
	.n-data-v {
		line-height: 16px;
		margin-top: 5px;
		color: #222;
		font-size: 12px;
	}
	a {
		color: inherit;
		text-decoration: none;
		transition: color .2s ease,background-color .2s ease;
	}

	#xian:hover{
		border-bottom: #00a1d6 3px solid;
		
	}
	.tabxianshi:hover{
		border-bottom: #00a1d6 3px solid;
		color: #00a1d6;
	}
	.videoxianshi:hover{
		border-bottom: #00a1d6 3px solid;
		color: #00a1d6;
	}
	.channelxs:hover{
		border-bottom: #00a1d6 3px solid;
		color: #00a1d6;
	}
	.collectxs:hover{
		border-bottom: #00a1d6 3px solid;
		color: #00a1d6;
	}
</style>
