export function getFirendsApi(success) {
	axios.get(global.serverUrl+'/firend/all')
	.then((res)=>{
		success(res)
	})
}