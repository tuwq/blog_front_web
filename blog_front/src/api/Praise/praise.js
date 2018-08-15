export function artPraiseIncrApi(articleId,success) {
	axios.put(global.serverUrl+'/praise/articleIncr/'+articleId)
	.then((res)=>{
		success(res)
	})
}