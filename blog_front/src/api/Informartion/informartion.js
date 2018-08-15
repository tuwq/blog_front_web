export function userInfoApi(id,success) {
	axios.get(global.serverUrl+'/informartion/show/userinfo/'+id)
	.then((res)=>{
		success(res)
	})
}

export function userFansApi(id,success) {
	axios.get(global.serverUrl+'/informartion/fans/'+id)
	.then((res)=>{
		success(res)
	})
}

export function userFollowsApi(id,success) {
	axios.get(global.serverUrl+'/informartion/follows/'+id)
	.then((res)=>{
		success(res)
	})
}

