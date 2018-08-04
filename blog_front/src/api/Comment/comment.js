export function rootCommentApi(articleId,content,success) {
	axios.post('/comment/add/root',{
		articleId,content
	}).then((res)=>{
		success(res)
	})
}

export function pageCommentAllApi(currentPage,pageSize,articleId,success) {
	axios.get('/comment/pageByArt',{
		params: {currentPage,pageSize,articleId}
	}).then((res)=>{
		success(res)
	})
}