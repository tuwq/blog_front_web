export function userInfoApi(id,success) {
	axios.get('/informartion/show/userinfo/'+id)
	.then((res)=>{
		success(res)
	})
}

export function userFansApi(id,success) {
	axios.get('/informartion/fans/'+id)
	.then((res)=>{
		success(res)
	})
}

export function userFollowsApi(id,success) {
	axios.get('/informartion/follows/'+id)
	.then((res)=>{
		success(res)
	})
}

