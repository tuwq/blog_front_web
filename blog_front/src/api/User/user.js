export function userInfoApi(success) {
	axios.get('/user/info')
	.then((res)=>{
		success(res)
	})
}