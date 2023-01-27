export function rephoneacx(){
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
