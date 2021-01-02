export function listCategoryApi(success) {
	axios.get(global.serverUrl+'/musicCategory/list')
	.then((res)=>{
		success(res)
	})
}

export function pageSongByCategoryApi(currentPage,pageSize,categoryId,success) {
	axios.get(global.serverUrl+'/music/pageByCategory',{
		params: {currentPage,pageSize,categoryId}
	}).then((res)=>{
		success(res)
	})
}

export function pageSongByKeywordApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/music/pageByKeyword',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)		
	})
}