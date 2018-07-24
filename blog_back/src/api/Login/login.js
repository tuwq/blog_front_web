export function loginApi(username,password,success,fail) {
	axios.post("/sys/login",{
		username,password
	}).then((res)=>{
		success(res)
	})
}

export function quitLoginApi(success) {
	axios.put('/sys/quitlogin')
	.then((res)=>{
		success(res)
	})
}