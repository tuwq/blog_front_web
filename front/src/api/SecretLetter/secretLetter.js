export function sendSecretLetterApi(contact,content,success) {
	axios.post(global.serverUrl+'/secretLetter/add',{
		contact,content
	}).then((res)=>{
		success(res)
	})
}