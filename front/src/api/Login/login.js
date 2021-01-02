export function registApi(state,success) {
	axios.post(global.serverUrl+'/login/regist',{
		username: state.username,
		email: state.email,
		password: state.password
	}).then((res)=>{
		success(res)
	})	
}

export function loginApi(state,success) {
	axios.post(global.serverUrl+'/login/login',{
		loginname: state.loginname,
		password: state.password
	}).then((res)=>{
		success(res)
	})
}


export function logoutApi(success) {
	axios.delete(global.serverUrl+'/login/logout')
	.then((res)=>{
		success(res)
	})
}

export function findPassApi(email,success) {
	axios.post(global.serverUrl+'/login/findPass/'+email)
	.then((res)=>{
		success(res)
	})
}

export function updatePassApi(key,password,rePassword,success) {
	axios.put(global.serverUrl+'/login/updatePass',{
		key,password,rePassword
	}).then((res)=>{
		success(res)
	})
}