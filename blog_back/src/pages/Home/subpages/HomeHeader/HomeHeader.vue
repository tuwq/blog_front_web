<template>
  <div id="HomeHeader" class="HomeHeader">
  	<div class="leftIcon">
  		<div class="icon-group">
	  		<a class="icon-control" @click="openNav"><i class="fa fa-list"></i></a>
	  		<a class="icon-control"><i class="fa fa-refresh"></i></a>
	  		<a class="icon-control"><i class="fa fa-search"></i></a>
  		</div>
  	</div>
  	<div class="rightIcon">
  		<div class="icon-group">
	  		<a class="icon-control"><i class="fa fa-tasks"></i><span class="label label-transparent-black">2</span></a>
	  		<a class="icon-control"><i class="fa fa-envelope"></i><span class="label label-transparent-black">2</span></a>
	  		<a class="icon-control"><i class="fa fa-bell"></i><span class="label label-transparent-black">2</span></a>
	  	</div>
  	</div>
  	<div class="user">
  		<a class="avatar"><img width="45" height="45" alt="" src="https://ikmoe.com/wp-content/uploads/avatars/190.jpg"/></a>
  		<a class="name">tuwq</a>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  
     created() {
     	
     },
     methods: {
      openNav() {
        $('#HomeMenuNav').toggleClass('open')
       }
     }
  }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./HomeHeader.scss";
  @import "./MHomeHeader.scss";
</style>
