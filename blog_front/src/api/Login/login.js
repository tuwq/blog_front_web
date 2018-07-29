export function registApi(state,success) {
	axios.post('/login/regist',{
		username: state.username,
		email: state.email,
		password: state.password
	}).then((res)=>{
		success(res)
	})	
}