export function getImgConfigApi(success) {
	axios.get(global.serverUrl+'/config/img')
	.then((res)=>{
		success(res)
	})
}