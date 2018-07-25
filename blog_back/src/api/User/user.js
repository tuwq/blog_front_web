export function getUserInfoApi(success) {
	axios.get('/sys/user/info').then((res)=>{
		success(res)
	})
}