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