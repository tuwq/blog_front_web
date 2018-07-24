export function checkLogin(username,password) {
	if (username == '' || username == undefined || username == null) {
		return false
	} 
	if (password == '' || password == undefined || password == null) {
		return false
	}
	return true
}

export function checkContent(title,categoryNames,content) {
    
   
    
	if (title == '' || title == undefined || title == null) {
		 console.log(title)
		return false
	} 
	if (categoryNames.length==0) {
		  console.log(categoryNames)
		return false
	}
	if (content == '' || content == undefined || content == null) {
		 console.log(content)
		return false
	} 
	return true
}