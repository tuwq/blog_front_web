export function getConfigImgApi(success) {
	axios.get(global.serverUrl+'/sys/config/img')
	.then((res)=>{
		success(res)
	})
}

export function updateConfigImgApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/config/img/update',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}