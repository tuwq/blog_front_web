export function getImgConfigApi(success) {
	axios.get('/config/img')
	.then((res)=>{
		success(res)
	})
}