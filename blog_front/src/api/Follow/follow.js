export function followUserApi(followId,followAction,success) {
	axios.post(global.serverUrl+'/follow/user',{
		followId,followAction
	}).then((res)=>{
		success(res)
	})
}