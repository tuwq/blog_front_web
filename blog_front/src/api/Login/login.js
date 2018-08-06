export function registApi(state,success) {
	axios.post('/login/regist',{
		username: state.username,
		email: state.email,
		password: state.password
	}).then((res)=>{
		success(res)
	})	
}

export function loginApi(state,success) {
	axios.post('/login/login',{
		loginname: state.loginname,
		password: state.password
	}).then((res)=>{
		success(res)
	})
}


export function logoutApi(success) {
	axios.delete('/login/logout')
	.then((res)=>{
		success(res)
	})
}

export function findPassApi(email,success) {
	axios.post('/login/findPass/'+email)
	.then((res)=>{
		success(res)
	})
}

export function updatePassApi(key,password,rePassword,success) {
	axios.put('/login/updatePass',{
		key,password,rePassword
	}).then((res)=>{
		success(res)
	})
}