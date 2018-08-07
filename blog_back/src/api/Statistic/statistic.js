export function statisicApi(success) {
	axios.get('/statisic/all')
	.then((res)=>{
		success(res)
	})
}