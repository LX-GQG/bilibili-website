<template>
	<div id="channel">
		<blheader></blheader>
		<shuffling></shuffling>
		<classify></classify>
		<div id="page-channel">
			<div id="page-channel-index" class="wrapperone">
				<div class="col-full">
					<div class="channel-index section">
						<div class="breadcrumb">
							<p class="item cur">
								TA的频道
							</p>
						</div>
						<div class="content">
							<div class="channel-list clearfix">
								<div class="channel-item"><a href="/488524310/channel/detail?cid=110736&amp;ctype=0"
										class="cover"><img
											src="../assets/images/3830e4508e8af7f98a6a783bb5a8e2a2b2707e8d.jpg@380w_240h_100Q_1c.webp">
										<div class="video-num">
											<div class="video-num-inner"><strong>1</strong><em class="icon"></em></div>
										</div><span class="i-watchlater no-select"></span>
									</a>
									<div class="channel-meta">
										<h4 title="学生作品-视频" class="channel-name">
											学生作品-视频
										</h4>
										<div class="channel-update-time">
											2020-3-12
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import blheader from '@/view/Blheader'
	import shuffling from '@/view/Shuffling'
	import classify from '@/view/Classify'

	export default {
		data() {
			return {};
		},
		components: {
			blheader,
			shuffling,
			classify
		},
		methods: {},
	};
</script>

<style>
	.wrapperone {
		width: 1251px;
		margin: 0 auto;
		position: relative;
	}
	.col-full {
		background: #fff;
		box-shadow: 0 0 0 1px #eee;
		border-radius: 4px;
		padding: 20px;
	}
	.section:last-child {
		border-bottom: none;
		margin-bottom: 0;
	}

	.section {
		border-bottom: 1px solid #eee;
		margin-bottom: 17px;
		position: relative;
	}
	.breadcrumb {
		line-height: 24px;
		font-size: 0;
		vertical-align: middle;
		position: relative;
	}
	.breadcrumb .item.cur {
		color: #222;
	}
	.breadcrumb .item {
		display: inline-block;
		font-size: 18px;
		color: #6d757a;
		vertical-align: middle;
	}
	#page-channel-index .channel-list {
		display: block;
	}
	#page-channel-index .channel-item {
		float: left;
		width: 160px;
		margin: 20px 20px 0 0;
	}
	#page-channel-index .channel-item .cover {
		position: relative;
		display: block;
		width: 100%;
		height: 100px;
		border-radius: 3px;
		overflow: hidden;
		background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/assets/video-placeholder.png);
		background-position: 50%;
		background-size: cover;
	}
	#page-channel-index .channel-item .cover img {
		display: block;
		width: 100%;
		height: 100%;
	}
	#page-channel-index .channel-item .cover .video-num {
		position: absolute;
		top: 0;
		right: 0;
		width: 70px;
		height: 100%;
		color: #e5e9ef;
		text-align: center;
		font-size: 12px;
		box-sizing: border-box;
		background-color: rgba(0,0,0,.6);
	}
	#page-channel-index .channel-item .cover .video-num-inner {
		position: absolute;
		top: 50%;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		transform: translateY(-50%);
		white-space: nowrap;
	}
	#page-channel-index .channel-item .cover .video-num strong {
		display: block;
		line-height: 30px;
		font-size: 18px;
		color: #fff;
		font-weight: 400;
		font-family: Arial;
	}
	#page-channel-index .channel-item .cover .video-num em {
		display: block;
		height: 20px;
		margin-top: 4px;
		background-position: -1223px -151px;
	}
</style>
