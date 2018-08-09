export function rootCommentApi(articleId,content,success) {
	axios.post('/comment/add/root',{
		articleId,content
	}).then((res)=>{
		success(res)
	})
}

export function childCommentApi(articleId,content,parentId,rootId,success) {
	axios.post('/comment/add/child',{
		articleId,content,parentId,rootId
	}).then((res)=>{
		success(res)
	})
}

export function pageArtCommentAllApi(currentPage,pageSize,articleId,success) {
	axios.get('/comment/pageByArt',{
		params: {currentPage,pageSize,articleId}
	}).then((res)=>{
		success(res)
	})
}

export function pageAllRootCommentApi(currentPage,pageSize,articleId,success) {
	axios.get('/comment/pageRootComment',{
		params: {currentPage,pageSize,articleId}
	}).then((res)=>{
		success(res)
	})
}

export function pageChildCommentApi(currentPage,pageSize,rootId,success) {
	axios.get('/comment/pageByRootId',{
		params: {currentPage,pageSize,rootId}
	}).then((res)=>{
		success(res)
	})
}

export function newCommentApi(success) {
	axios.get('/comment/new/'+global.newCommentPageSize)
	.then((res)=>{
		success(res)
	})
}
