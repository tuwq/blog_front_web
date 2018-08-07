export function addArticleApi(title,categoryNames,content,coverImg,success) {
	axios.post('/sys/article/add',{
		title,categoryNames,content,coverImg
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
	axios.post('/sys/article/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function getArticleDetail(id,success) {
	axios.get('/sys/article/'+id)
	.then((res)=>{
		success(res)
	})
}

export function updateArticleApi(id,title,categoryNames,content,coverImg,success) {
	axios.put('/sys/article/'+id,{
		title,categoryNames,content,coverImg
	}).then((res)=>{
		success(res)
	})
}

export function getFaceCoverUrlApi(formdata,success) {
	axios.post('/sys/article/faceCover',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}