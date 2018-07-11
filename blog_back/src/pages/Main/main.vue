<template>
  <div id="Home">
      123
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios' 
  export default {  
     created() {
     	this.send()
     },
     methods: {
		send() {
			axios.get('/test/get',{
				params: {
					id: 1
				}
			}).then((res)=>{
				console.log(res.data)
			})
			axios.post('/test/post',{
				id: 2,
				name: 'name',
			}).then((res)=>{
				console.log(res.data)
			})
			axios.put('/test/put',{
				id: 3
			}).then((res)=>{
				console.log(res.data)
			})
			axios.delete('/test/del',{
				data: {
					id: 4
				}
			}).then((res)=>{
				console.log(res.data)
			})
		}
	 }
  }
</script>

<style lang="scss" scoped="" type="text/css">
  @import "./sass/main.scss"
</style>
