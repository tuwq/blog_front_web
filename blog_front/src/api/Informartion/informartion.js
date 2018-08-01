export function userInfoApi(id,success) {
	axios.get('/informartion/show/userinfo/'+id)
	.then((res)=>{
		success(res)
	})
}

