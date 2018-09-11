export function getUserInfoApi(success) {
	axios.get(global.serverUrl+'/sys/user/info').then((res)=>{
		success(res)
	})
}