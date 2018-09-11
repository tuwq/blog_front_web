export function addArticleApi(title,weight,categoryNames,content,coverImg,success) {
	axios.post(global.serverUrl+'/sys/article/add',{
		title,weight,categoryNames,content,coverImg
	}).then((res)=>{
		success(res)
	})
} 

export function getImgURIApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/article/getImgURI',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function getArticleListApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/sys/article/list',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete(global.serverUrl+'/sys/article/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

export function updateBatchApi(ids,success) {
	axios.put(global.serverUrl+'/sys/article/updateBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/sys/article/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function getArticleDetailApi(id,success) {
	axios.get(global.serverUrl+'/sys/article/'+id)
	.then((res)=>{
		success(res)
	})
}

export function updateArticleApi(id,title,weight,categoryNames,content,coverImg,success) {
	axios.put(global.serverUrl+'/sys/article/'+id,{
		title,weight,categoryNames,content,coverImg
	}).then((res)=>{
		success(res)
	})
}

export function getFaceCoverUrlApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/article/faceCover',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}