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

export function getArticleList(params,success) {
	axios.get('/sys/article/list',{
		params: params
	})
	.then((res)=>{
		success(res)
	})
}