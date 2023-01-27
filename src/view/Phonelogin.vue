<template>

	<div id="login-app">
		<div class="login-app">
			<!---->
			<div >
				<div class="container">
					<div class="header-box text-box-color text-title-color">
						<div></div>
						<h1>
							登录bilibili
						</h1>
						<div>
							<div class="title-right">
								<span style="display: none;">短信登录</span> 
								<span>密码登录</span></div>
						</div>
					</div>
					<div>
						<div class="form-group"><label
								class="select-box"><select id="select0.12221979651752979"
									name="country_code" class="select-color">
									<option value="86">中国大陆</option>
									<option value="852">中国香港特别行政区</option>
									<option value="853">中国澳门特别行政区</option>
									<option value="886">中国台湾</option>
									<option value="1">美国</option>
									<option value="32">比利时</option>
									<option value="61">澳大利亚</option>
									<option value="33">法国</option>
									<option value="1">加拿大</option>
									<option value="81">日本</option>
									<option value="65">新加坡</option>
									<option value="82">韩国</option>
									<option value="60">马来西亚</option>
									<option value="44">英国</option>
									<option value="39">意大利</option>
									<option value="49">德国</option>
									<option value="7">俄罗斯</option>
									<option value="64">新西兰</option>
									<option disabled="disabled" value="">--其它--</option>
									<option value="93">阿富汗</option>

								</select>
								<div class="select-arrow"></div>
							</label></div>
						<div class="form-group">
							<ul class="list-group list-group-border">
								<li class="list-group-li">
									<div
										class="input-item clearfix text-box-color has-button"><span
											class="float-left input-title text-title-color">+86</span> <input
											data-v-15db3d56="" placeholder="请输入常用手机号" maxlength="16" type="tel"
											name="tel" autocomplete="off"
											class="float-left input-text text-title-color">
										<div class="float-left input-status clearfix">
											<!---->
										</div> <button
											class="input-btn text-btn-color float-left">获取验证码</button>
									</div>
								</li>
								<li class="list-group-li">
									<div
										class="input-item clearfix text-box-color"><span
											class="float-left input-title text-title-color">验证码</span> <input
											data-v-15db3d56="" placeholder="请输入验证码" maxlength="6" type="tel"
											name="captcha" autocomplete="off"
											class="float-left input-text text-title-color long-width">
										<div class="float-left input-status clearfix">
											<!---->
										</div>
										<!---->
									</div>
								</li>
							</ul>
						</div>
						<div class="btn-box clearfix">
							<div class="btn-default btn-width btn-default-disable btn-full">验证登录
							</div>
						</div>
					</div>
					<div style="display: none;">
						<div class="form-group">
							<ul class="list-group list-group-border">
								<li class="list-group-li">
									<div
										class="input-item clearfix text-box-color"><span
											class="float-left input-title text-title-color">账号</span> <input
											data-v-15db3d56="" placeholder="你的手机号/邮箱" type="text" name="username"
											autocomplete="on" class="float-left input-text text-title-color long-width">
										<div class="float-left input-status clearfix">
											<!---->
										</div>
										<!---->
									</div>
								</li>
								<li class="list-group-li">
									<div
										class="input-item clearfix text-box-color"><span
											class="float-left input-title text-title-color">密码</span> <input
											data-v-15db3d56="" placeholder="请输入密码" maxlength="20" type="password"
											name="password" autocomplete="on"
											class="float-left input-text text-title-color long-width">
										<div class="float-left input-status clearfix">
											<!---->
										</div>
										<!---->
									</div>
								</li>
							</ul>
						</div>
						<div class="forget-group">
							<p><a
									href="//passport.bilibili.com/account/findpassword.html?gourl=https://m.bilibili.com/"
									class="pink-color">忘记密码</a></p>
						</div>
						<div class="btn-box clearfix"><a
								href="//passport.bilibili.com/register/phone.html#/phone?gourl=https://m.bilibili.com/"
								class="btn-primary btn-width">注册</a>
							<div class="btn-default btn-width btn-default-disable">登录</div>
						</div>
					</div>
					<p class="explain tips">登录即代表你同意<a target="_blank"
							href="https://www.bilibili.com/blackboard/account-useragreement.html">用户协议</a>和<a
							data-v-4e6c4f46="" target="_blank"
							href="https://www.bilibili.com/blackboard/privacy-h5.html">隐私政策</a></p>
					<div class="sns-box" style="display: none;">
						<div class="sns-title clearfix">
							<div class="line-box"><span></span></div>
							<div class="sns-content">
								<p class="tips">
									其它登录方式
								</p>
							</div>
							<div class="line-box"><span></span></div>
						</div>
						<div class="sns-btn">
							<div>
								<div class="icon-qq"></div> <span
									class="tips">QQ</span>
							</div>
							<div>
								<div class="icon-weibo"></div> <span
									class="tips">微博</span>
							</div>
						</div>
					</div>
				</div>
				<!---->
			</div>
			<!---->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {},
		methods: {},
	};
</script>

<style>
</style>
