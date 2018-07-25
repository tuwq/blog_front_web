export function addArticleApi(title,categoryNames,content,success) {
	axios.post('/sys/article/add',{
		title,categoryNames,content
	}).then((res)=>{
		success(res)
	})
} 

export function getImgURIApi(formdata,success) {
	axios.post('/sys/article/getImgURI',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function getArticleListApi(currentPage,pageSize,success) {
	axios.get('/sys/article/list',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete('/sys/article/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

export function updateBatchApi(ids,success) {
	axios.put('/sys/article/updateBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.get('/sys/article/search',{
		params: {currentPage,pageSize,keyword}
	}).then((res)=>{
		success(res)
	})
}