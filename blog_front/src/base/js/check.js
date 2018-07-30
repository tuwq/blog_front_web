export function checkRegistForm(state) {
	if (state.username.trim() == '' || state.username == null ) {
		return '账户不能为空'
	}
	if (state.password.trim() == '' || state.password == null ) {
		return '密码不能为空'
	}
	if (!checkmail(state.email)) {
		return '邮箱格式错误'
	}
	if (state.usercode.toLowerCase() != state.truecode) {
		return '验证码错误'
	}
	return true
}

export function checkmail(mail) {
	// 邮箱验证规则  
	var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return reg.test(mail)
}


export function checkLoginForm(state) {
	if (state.loginname.trim() == '' || state.loginname == null) {
		return '账户不能为空'
	}
	if (state.password.trim() == '' || state.password == null) {
		return '密码不能为空'
	}
	return true
}

