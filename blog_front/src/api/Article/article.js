export function articleDetailApi(articleId,success) {
	axios.get(global.serverUrl+'/article/'+articleId)
	.then((res)=>{
		success(res)
	})
}