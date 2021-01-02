export function articleTagAllApi(success) {
	axios.get(global.serverUrl+'/articleTag/all')
	.then((res)=>{
		success(res)
	})
}

export function pageArticleByArticleTagApi(currentPage,pageSize,articleTagId,success) {
	axios.get(global.serverUrl+'/articleTag/pageArticleByArticleTag',{
		params: {currentPage,pageSize,articleTagId}
	}).then((res)=>{
		success(res)
	})
}

export function pageArticleByCreateTimeApi(currentPage, pageSize, success) {
	axios.get(global.serverUrl+'/archive/createTime',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}