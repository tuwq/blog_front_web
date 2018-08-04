export function articleDetailApi(articleId,success) {
	axios.get('/articale/'+articleId)
	.then((res)=>{
		success(res)
	})
}