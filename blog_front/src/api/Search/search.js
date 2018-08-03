export function pageSearchByKeyWordApi(currentPage,pageSize,keyword,success) {
	axios.get('/search/page/keyword',{
		params: {currentPage,pageSize,keyword}
	}).then((res)=>{
		success(res)
	})

}

export function pageArticleAllApi(currentPage,pageSize,success) {
	axios.get('/search/page/all',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}