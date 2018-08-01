export function followUserApi(followId,followAction,success) {
	axios.post('/follow/user',{
		followId,followAction
	}).then((res)=>{
		success(res)
	})
}