<template>
  <div id="AddMusic" class="AddMusic">
    <div class="wrap">
      <div class="inner">
        <div class="form">
          <div class="form-control">
            <span style="color: #d55050;">{{error}}</span>
          </div>
          <div class="form-control">
            <input type="text" placeholder="歌名" v-model="songName"/>
          </div>
          <div class="form-control">
            <input type="text" placeholder="歌手" v-model="singer"/>
          </div>
          <div class="form-control">
            <textarea v-model="lyric" placeholder="歌词"></textarea>
          </div>
          <div class="form-control">
            <input type="number" placeholder="权重" v-model="weight"/>
          </div>
          <div class="checkbox-group">
              <div v-for="(item,index) in categoryList" :key="item.id">
                <label for="song_category">{{item.name}}</label> 
                <input type="checkbox" id="song_category" :value="item.id" v-model="categoryNames">
                &nbsp;
              </div>
          </div>
          <div class="form-control">
            <span class="image" @click="chooseCover">
              上传封面
              <img ref="$cover" width="60" height="60" alt="" src=""/>
              <input type="file" ref="$coverFile" style="display: none;"/>
            </span>
          </div>
          <div class="form-control">
            <span class="image" @click="chooseMusic">
              上传音乐
              <audio ref="$audio" src="" controls="controls"/>
              <input type="file" ref="$musicFile" style="display: none;"/>
            </span>
          </div>
           <div class="form-control">
           <button @click.stop="finish">添加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getMusicCategoryApi,addMusicApi } from 'api/Music/music'

  export default {
    data() {
      return {
        error: '',
        songName: '',
        singer: '',
        lyric: '',
        weight: 0,
        categoryNames: [],
        categoryList: []
      }
    },
    created() {
    	this.initCategoryData()
    },
    mounted() {
      $(this.$refs.$coverFile).on('change',()=>{this.readyCover()})
      $(this.$refs.$musicFile).on('change',()=>{this.readyMusic()})
    },
    destroyed() {
      $(this.$refs.$coverFile).off('change')
      $(this.$refs.$musicFile).off('change')
    },
    methods: {
      readyCover() {
        let file = this.$refs.$coverFile.files[0]
        if (file == undefined) { return }
        var freader = new FileReader();  
        freader.readAsDataURL(file);  
        var self = this
        freader.onload = function(e) {  
          $(self.$refs.$cover).attr("src",e.target.result);  
        };
      },
      readyMusic() {
        let file = this.$refs.$musicFile.files[0]
        if (file == undefined) { return }
        var freader = new FileReader();  
        freader.readAsDataURL(file);  
        var self = this
        freader.onload = function(e) {  
          $(self.$refs.$audio).attr("src",e.target.result);  
        };
      },
      chooseCover() {
        this.$refs.$coverFile.click()
      },
      chooseMusic() {
        this.$refs.$musicFile.click()
      },
      initCategoryData() {
        getMusicCategoryApi((res)=>{
          this.categoryList = res.data.result
        })
      },
      finish() {
        if (this.$refs.$coverFile.files[0]==undefined || this.$refs.$musicFile.files[0]==undefined) {
          this.error = '未选择文件'
          return
        }
        var formdata = new FormData()
        formdata.append('cover',this.$refs.$coverFile.files[0])
        formdata.append('music',this.$refs.$musicFile.files[0])
        formdata.append('songName',this.songName)
        formdata.append('singer',this.singer)
        formdata.append('lyric',this.lyric)
        formdata.append('weight',this.weight)
        formdata.append('duration',this.$refs.$audio.duration)
        formdata.append('categoryNames',this.categoryNames)
        this.error = '正在添加...'
        addMusicApi(formdata,(res)=>{
          if (res.data.code == 200) {
            this.error = '添加成功' 
            this.songName = ''
            this.singer = ''
            this.lyric = ''
          } else {
            this.error = res.data.msg
          }
        })
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "./AddMusic.scss"
</style>
