export function loginApi(username,password,success,fail) {
	axios.post(global.serverUrl+"/sys/login",{
		username,password
	}).then((res)=>{
		success(res)
	})
}

export function quitLoginApi(success) {
	axios.put(global.serverUrl+'/sys/quitlogin')
	.then((res)=>{
		success(res)
	})
}