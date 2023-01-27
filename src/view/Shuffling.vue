<template>
	<div class="shuffling">
		<div class="wrapper">
			<div class="f-wrap">
				<div class="h-gradient"></div>
				<div class="h-user">
					<div class="h-info clearfix">
						<div class="h-avatar">
							<img src="../assets/images/4c4850ff0fbf8cc10db6f30f335446fcd5f24c54.jpg@128w_128h_1o.webp"
							id="h-avatar">
							<span title="机构认证" class="user-auth-subscript avatar-m organization-auth"></span></div>
						<div class="h-basic">
							<div><span id="h-name">茂职院计算机工程系</span><span id="h-ceritification" class="icon"></span><span id="h-gender" class="icon gender"></span><a
								href="//www.bilibili.com/html/help.html#k" target="_blank" lvl="2" class="h-level m-level"></a><a href="//account.bilibili.com/account/big"
								target="_blank" class="h-vipType" style="display: none;"></a>
							</div>
							<div class="h-basic-spacing">
								<h4 title="茂名职业技术学院计算机工程系官方账号
	修徳 强技 求实 创新
	关注超1000人，我就开直播！！！" class="h-sign">
									茂名职业技术学院计算机工程系官方账号
									修徳 强技 求实 创新
									关注超1000人，我就开直播！！！
								</h4><input id="h-sign" type="text" placeholder="编辑个性签名" maxlength="60" class="space_input" style="display: none;">
							</div>

						</div>
					</div>
				</div>
				<div class="h-action"><span class="h-f-btn h-follow" id="h-follow"><i class=""></i>关注
					</span>
						<a href="//message.bilibili.com/#whisper/mid488524310" target="_blank" class="h-f-btn h-message">发消息</a>
						<div class="be-dropdown h-add-to-black">
							<div class="be-dropdown-trigger">
								<i title="更多操作" class="iconfonts icon-ic_more">
									<img src="../assets/images/more.png" alt="">
								</i>
							</div>
							<ul class="be-dropdown-menu">
								<li class="be-dropdown-item">加入黑名单</li>
								<li class="be-dropdown-item">悄悄关注</li>
								<li class="be-dropdown-item">个人信息举报</li>
							</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {},
		methods: {}
	};
</script>

<style>
	.shuffling {
		position: relative;
		z-index: 10;
	}
	.h-user {
		position: relative;
		z-index: 1;
	}
	.wrapper {
		width: 1281px;
		height: 80px;
		margin: 0 auto;
		background-image: url(../assets/images/background-1.png);
		background-position: 50%;
		background-size: cover;
		transition: background-image .2s ease, background-size 1s ease;
		padding-top: 116px;
		position: relative;
	}
	.h-gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 84px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAABdCAMAAADNEjtLAAABEVBMVEUDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAACnjvHuAAAAW3RSTlMBAgMEBQYHCAkKCwwNDxAREhQVFhgZGxweHyEiJCUnKSosLS8xMjQ2ODk7PT5AQkNFR0hKTE5PUVNUVldZW1xeX2FiZGVnaGprbG5vcHFzdHV2d3h5ent8fX5/XoZ4lgAAAPVJREFUeAHt1AERADAQAiDdrX/mDyKEIAAAjGkDsOk3AAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECAgQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBAQIIEAAAQIseAEYdZ9sAcJDX4ICAAAAAElFTkSuQmCC);
		background-repeat: repeat-x;
	}
	.h-avatar {
		position: relative;
		float: left;
		width: 64px;
		height: 64px;
		border: 2px solid hsla(0,0%,100%,.4);
		border-radius: 52px;
	}
	.h-basic {
		color: #fff;
		font-size: 0;
		margin-left: 22px;
	}
	.user-auth-subscript.organization-auth.avatar-b, .user-auth-subscript.organization-auth.avatar-m {
		background-position: -4px -53px;
	}
	.user-auth-subscript.organization-auth {
		display: block;
	}
	.user-auth-subscript.avatar-m {
		right: 0;
		top: 44px;
		width: 20px;
		height: 20px;
	}
	.user-auth-subscript {
		position: absolute;
		display: none;
		z-index: 9;
		background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/assets/user-auth.png);
		background-repeat: no-repeat;
	}
	#h-name {
		display: inline-block;
		margin-right: 5px;
		font-weight: 700;
		line-height: 18px;
		font-size: 18px;
		vertical-align: middle;
		position: absolute;
		left: 70px;
		top: 2px;
	}

	#h-avatar {
		width: 64px;
		height: 64px;
		background: #fff;
		border-radius: 48px;
	}
	
	#h-ceritification {
		background-position: -217px -792px;
		display: none;
		width: 11px;
		height: 18px;
		margin: 0 1px 0 6px;
		vertical-align: middle;
	}
	
	.icon {
		vertical-align: middle;
		background-repeat: no-repeat;
		
	}
	.m-level {
		display: inline-block;
		position: absolute;
		width: 28px;
		height: 18px;
		margin-right: 5px;
		vertical-align: middle;
		background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/assets/level.png);
		background-repeat: no-repeat;
		background-position: -21px -82px;
		left: 235px;
		top: 3px;
	}
	.h-info {
		margin-left: 20px;
		padding-bottom: 16px;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.h-basic {
		color: #fff;
		font-size: 0;
		margin-left: 22px;
		position: relative;
	}
	
	.h-sign {
		background: transparent;
		border-radius: 4px;
		border: none;
		box-shadow: none;
		color: hsla(0, 0%, 100%, .8);
		font-size: 8px;
		font-family: Microsoft Yahei;
		line-height: 26px;
		height: 26px;
		margin-left: -5px;
		padding: 0 5px;
		position: relative;
		top: 13px;
		left: 24px;
		width: 730px;
		font-weight: 400;
	}
	.h-action {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 1;
	}
	#h-follow {
		background: #f25d8e;
		box-shadow: 0 0 0 2px #fff;
		color: #fff;
	}
	.h-f-btn {
		background: rgba(0,0,0,.45);
		box-shadow: 0 0 0 2px hsl(0deg 0% 100% / 30%);
		border-radius: 4px;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-size: 14px;
		float: left;
		text-align: center;
		margin: 0 20px 17px 0;
		width: 76px;
		line-height: 30px;
	}
	.h-add-to-black {
		float: left;
		height: 30px;
	}
	.be-dropdown:hover .be-dropdown-menu{
		display: block;
	}
	.be-dropdown-trigger {
		width: 30px;
		height: 30px;
	}
	.icon-ic_more {
		color: #fff;
		font-size: 30px;
		line-height: 30px;
		display: block;
		
	}
	
	.icon-ic_more img{
		width: 100%;
		height: 100%;
	}
	.be-dropdown-menu{
		display: none;
		position: fixed;
		top: 233px;
		z-index: 10;
		padding: 6px 0;
		background-color: #fff;
		border: 1px solid #e5e9ef;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
	}
	.be-dropdown-item {
		height: 40px;
		padding: 0 20px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		color: #222;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background-color .2s ease;
		cursor: pointer;
	}
</style>
