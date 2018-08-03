export function categoryPageApi(currentPage,pageSize,categoryId,success) {
	axios.get('/category/list',{
		params: {currentPage,pageSize,categoryId}
	}).then((res)=>{
		success(res)
	})
}