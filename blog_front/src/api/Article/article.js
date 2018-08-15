export function articleDetailApi(articleId,success) {
	axios.get(global.serverUrl+'/articale/'+articleId)
	.then((res)=>{
		success(res)
	})
}