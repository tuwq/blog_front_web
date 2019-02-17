export function getFriendsApi(success) {
	axios.get(global.serverUrl+'/friend/all')
	.then((res)=>{
		success(res)
	})
}