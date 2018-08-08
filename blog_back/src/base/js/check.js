export function checkLogin(username,password) {
	if (username == '' || username == undefined || username == null) {
		return false
	} 
	if (password == '' || password == undefined || password == null) {
		return false
	}
	return true
}

export function isNumber(str) {
	return (/^\d+$/.test(str))
}

export function checkContent(title,categoryNames,content,cover_img) {
	if (title == '' || title == undefined || title == null) {
		alert('标题不能空')
		return false
	} 
	if (categoryNames.length==0) {
		alert('分类不能空')
		return false
	}
	if (content == '' || content == undefined || content == null) {
		alert('内容不能空')
		return false
	} 
	if (cover_img == '' || cover_img == undefined || cover_img == null) {
		alert('封面不能空')
		return false
	}
	return true
}