export function userInfoApi(success) {
	axios.get(global.serverUrl+'/user/info')
	.then((res)=>{
		success(res)
	})
}

export function userEditInfoApi(success) {
	axios.get(global.serverUrl+'/user/editInfo')
	.then((res)=>{
		success(res)
	})
}

export function userAvatarUploadApi(formdata,success) {
	axios.post(global.serverUrl+'/user/avatar',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function userBasisSettingApi(state,success) {
	axios.put(global.serverUrl+'/user/basisSetting',{
		nickname: state.nickname,
		website: state.website,
		desc: state.desc
	}).then((res)=>{
		success(res)
	})
}

export function userSecuritySettingApi(state,success) {
	axios.put(global.serverUrl+'/user/securitySetting',{
		email: state.email,
		password: state.password,
		repassword: state.repassword
	}).then((res)=>{
		success(res)
	})
}