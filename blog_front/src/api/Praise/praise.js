export function artPraiseIncrApi(articleId,success) {
	axios.put('/praise/articleIncr/'+articleId)
	.then((res)=>{
		success(res)
	})
}