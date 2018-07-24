export function getUserInfo(success) {
	axios.get('/sys/user/info').then((res)=>{
		success(res)
	})
}