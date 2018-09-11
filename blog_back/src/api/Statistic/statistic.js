export function statisicApi(success) {
	axios.get(global.serverUrl+'/statisic/all')
	.then((res)=>{
		success(res)
	})
}