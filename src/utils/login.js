//登陆界面文本框提示

// 用户名
function loginname(){
	var name = document.getElementById('loginname_span');
	var text = document.getElementById('loginname_text').value;
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	if (reg.test(text)) {
		name.innerHTML = '';
		return true;
	}else{
		name.innerHTML = '请输入正确的手机号或者邮箱';
		return false;
	}
	var reg1 = /^\w+((-\w+)|(\.\w+))*\@[a-za-z0-9]+((\.|-)[a-za-z0-9])*\.[a-za-z0-9]+$/;
	if (reg1.test(text)) {
		name.innerHTML = '';
		return true;
	}else if (text.length==0) {
		name.innerHTML = '请输入注册时用的邮箱或者手机号呀';
		return false;
	}else{
		name.innerHTML = '请输入正确的手机号或者邮箱';
		return false;
	}
}

//密码

function loginpw(){
	var pw = document.getElementById('loginpw_span');
	var text = document.getElementById('loginpw_text').value;
	var reg = /^[a-z | A-Z]\w{5,15}/;
	if (reg.test(text)) {
		pw.innerHTML = '';
		return true;
	}else{
		pw.innerHTML = '密码只能6-16个字母';
		return false;
	}
}

//验证码

function loginic_img(){
	var img = document.getElementById('loginic_img');
	img.style.display = 'block';
}
function lyanzheng(){
	var icspan = document.getElementById('loginic-span');
	var ic = document.getElementById('loginic_text').value;
	if (ic.length==0) {
		icspan.innerHTML = '请输入验证码';
		return false;
	}else if (ic == 'ypnbf'){
		icspan.innerHTML = '';
		return true;
	}else{
		icspan.innerHTML = '验证码错误';
		return false;
	}
}

//登陆

function denglu(){
	 if (loginname()&&loginpw()&&lyanzheng()) {
		window.location.href = 'index.html';
	}
}

//右侧二维码
function qr_one(){
	var img1 = document.getElementById('qrcode1');
	var img2 = document.getElementById('qrcode2');
	img1.style.display = 'none';
	img2.style.display = 'block';
}

function qr_two(){
	var img1 = document.getElementById('qrcode1');
	var img2 = document.getElementById('qrcode2');
	img1.style.display = 'block';
	img2.style.display = 'none';
}

//注册界面

function rephoneacx(){
	var cx = document.getElementById('rephone1_acx');
	if (cx.checked) {
		$('#next_step_sut').css('display','block');
		$('#next_step_sut1').hide();
	}else{
		$('#next_step_sut1').show();
		$('#next_step_sut').hide();
	}
}

$('.rename-t').blur(function() {
	var name = $(this).val();
	// alert(name)
	if (name.length < 3) {
		$('.rename .re-tishi').text('你的用户名过短，不允许注册！');
	}else if (name=='moe') {
		$('.rename .re-tishi').text('这个昵称已经有人用过了');
	}else{
		$('.rename .re-tishi').text('');
	}
});

$('.repws').blur(function() {
	var text = $('.repws').val();
	// alert(text);
	var reg = /^[a-z | A-Z]\w{5,15}/;
	if (reg.test(text)) {
		$('.repw .re-tishi').text('');
	}else{
		$('.repw .re-tishi').text('密码只能6-16个字母');
	}
});

$('.rephone-t').blur(function() {
	var phone = $(this).val();
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	if (reg.test(phone)) {
		$(".rephone .re-tishi1").text('');
	}else{
		$(".rephone .re-tishi1").text('亲，看起来不像手机号呢');
	}
});

$('#rephone1_text').blur(function() {
	var yan = $(this).val();
	var two = '2333';
	if (yan == two) {
		$(".rephone1 .re-tishi").text('');
	}else{
		$(".rephone1 .re-tishi").text('验证码错误');
	}
});

$('.rephone1_a').click(function() {
	var phone = $('.rephone-t').val();
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	if (reg.test(phone)) {
		$(".rephone .re-tishi1").text('');
		$(this).css('background','#f9f9f9');
		$(this).css('color','#aaa');
		$(this).text('获取成功');
	}else{
		$(".rephone .re-tishi1").text('亲，看起来不像手机号呢');
	}
	return false;
});

function mingzi(){
	var name = $('.rename-t').val();
	// alert(name)
	if (name.length < 3) {
		$('.rename .re-tishi').text('你的用户名过短，不允许注册！');
		return false;
	}else if (name=='moe') {
		$('.rename .re-tishi').text('这个昵称已经有人用过了');
		return false;
	}else{
		$('.rename .re-tishi').text('');
		return true;
	}
}

function mima(){
	var text = $('.repws').val();
	// alert(text);
	var reg = /^[a-z | A-Z]\w{5,15}/;
	if (reg.test(text)) {
		$('.repw .re-tishi').text('');
		return true;
	}else{
		$('.repw .re-tishi').text('密码只能6-16个字母');
		return false;
	}
}

function shouji(){
	var phone = $('.rephone-t').val();
	var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	if (reg.test(phone)) {
		$(".rephone .re-tishi1").text('');
		return true;
	}else{
		$(".rephone .re-tishi1").text('亲，看起来不像手机号呢');
		return false;
	}
}

function yanzheng(){
	var yan = $('#rephone1_text').val();
	var two = '2333';
	if (yan == two) {
		$(".rephone1 .re-tishi").text('');
		return true;
	}else{
		$(".rephone1 .re-tishi").text('验证码错误');
		return false;
	}
}

$('#next_step_sut').click(function() {
	if (mingzi()&&mima()&&shouji()&&yanzheng()) {
		window.location.href = 'login.html';
	}

	return false;
});