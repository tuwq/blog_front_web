<template>
  <div id="AddArticle" class="AddArticle">
     <div class="wrap">
     	<div class="content">
     		<div class="title">
          <h2>新增文章</h2>
     			<input v-model="title" type="text" placeholder="文章标题">
     		</div>
     		<div class="categroy">
     			<h2>文章分类</h2>
     			<div class="checkbox-group">
	     			<div class="checkbox-control">
	     				<label for="article">文章</label> 
	     				<input type="checkbox" id="article" value="1" v-model="categoryNames">
	     			</div>
	     			<div class="checkbox-control">
		     			<label for="tutorial">教程</label>
						<input type="checkbox" id="checkbox" value="2" v-model="categoryNames">
					</div>
					<div class="checkbox-control">
						<label for="shortCode">短代码</label>
						<input type="checkbox" id="checkbox" value="3" v-model="categoryNames">
	     			</div>
	     			<div class="checkbox-control">
						<label for="leisure">个人闲谈</label>
						<input type="checkbox" id="leisure" value="4" v-model="categoryNames">
	     			</div>
     			</div>
     		</div>
     		<div class="markdownEditor" id="editor">
           <button @click="finish" class="finishBtn">完成</button>
           <button @click="uploadimg" class="uploadBtn">上传图片</button>
     			 <mavon-editor style="height: 100%" v-model="content" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
     		</div>
     	</div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import { addArticleApi,getImgURIApi } from 'api/Article/article'
    import { checkContent } from 'base/js/check'
  export default {  
    data() {
    	return {
        title: '',
    		categoryNames: [],
        content: '',
        img_file: {}
    	}
    },
    methods: {
      // 绑定@imgAdd event
      $imgAdd(pos, $file){
          // 缓存图片信息
          this.img_file[pos] = $file;
      },
      $imgDel(pos){
          delete this.img_file[pos];
      },
      uploadimg($e) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        for(var _img in this.img_file){
            formdata.append('fileArray', this.img_file[_img])
        }
        /*var data = {
          "0": "1a.jpg",
          "1": "2b.jpg",
          "2": "3c.jpg"
        }
        for (var img in data) {
          this.$refs.md.$img2Url(img,data[img])
        }*/
        getImgURIApi(formdata,(res)=>{
           for(var img in res.data.imgNodes) {
            console.log(img)
            console.log(res.data.imgNodes[img].path)
            this.$refs.md.$img2Url(img,res.data.imgNodes[img].path)
           }
        })
      },
      finish() {
        if (checkContent(this.title,this.categoryNames,this.content)) {
          addArticleApi(this.title,this.categoryNames,this.content,(res)=>{
            if(res.data.code==200) {
                alert('发表成功了')
            }
          })
        } else {
          alert('不能为空')
        }
      }
    },
    components: {
        mavonEditor
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./AddArticle.scss";
  @import "./MAddArticle.scss";
</style>
