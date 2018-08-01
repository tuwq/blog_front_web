export function userInfoApi(success) {
	axios.get('/user/info')
	.then((res)=>{
		success(res)
	})
}

export function userEditInfoApi(success) {
	axios.get('/user/editInfo')
	.then((res)=>{
		success(res)
	})
}

export function userAvatarUploadApi(formdata,success) {
	axios.post('/user/avatar',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function userBasisSettingApi(state,success) {
	axios.put('/user/basisSetting',{
		nickname: state.nickname,
		website: state.website,
		desc: state.desc
	}).then((res)=>{
		success(res)
	})
}

export function userSecuritySettingApi(state,success) {
	axios.put('/user/securitySetting',{
		email: state.email,
		password: state.password,
		repassword: state.repassword
	}).then((res)=>{
		success(res)
	})
}