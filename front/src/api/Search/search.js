export function pageSearchByKeyWordApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/search/page/keyword',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})

}

export function pageArticleAllApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/search/page/all',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}