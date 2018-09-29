<template>
  <div id="EditMusic" class="EditMusic">
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
              <img ref="$cover" width="60" height="60" alt="" :src="coverResource"/>
              <input type="file" ref="$coverFile" style="display: none;"/>
            </span>
          </div>
          <div class="form-control">
            <span class="image" @click="chooseMusic">
              上传音乐
              <audio ref="$audio" :src="musicResource" controls="controls"/>
              <input type="file" ref="$musicFile" style="display: none;"/>
            </span>
          </div>
           <div class="form-control">
           <button @click.stop="finish">修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getMusicCategoryApi,getSongInfo,editMusicApi,updateCoverApi,updateMusicApi } from 'api/Music/music'
  import { isNumber } from 'base/js/check' 

  export default {
    data() {
      return {
        error: '',
        songName: '',
        singer: '',
        lyric: '',
        duration: 0,
        weight: 0,
        categoryNames: [],
        categoryList: [],
        coverResource: '',
        musicResource: ''
      }
    },
    created() {
    	this.initCategoryData()
      this.initInfo()
    },
    mounted() {
      $(this.$refs.$coverFile).on('change',()=>{this.readyCover()})
      $(this.$refs.$musicFile).on('change',()=>{this.readyMusic()})
    },
    destroyed() {
      $(this.$refs.$coverFile).off('change')
      $(this.$refs.$musicFile).off('change')
      this.$refs.$audio.oncanplay = null
    },
    methods: {
      readyCover() {
        let file = this.$refs.$coverFile.files[0]
        if (file == undefined) { return }
        var formdata = new FormData()
        formdata.append('cover',file)
        formdata.append('id',this.$route.params.id)
        updateCoverApi(formdata,(res)=>{
          if (res.data.code == 200) {
            this.error = '封面修改成功'
          }
        })
      },
      readyMusic() {
        let file = this.$refs.$musicFile.files[0]
        if (file == undefined) { return }
        var formdata = new FormData()
        formdata.append('music',file)
        formdata.append('id',this.$route.params.id)
        updateMusicApi(formdata,(res)=>{
          if (res.data.code == 200) {
            this.error = '音乐修改成功'
          }
        })

        var freader = new FileReader();  
        freader.readAsDataURL(file);  
        var self = this
        freader.onload = function(e) {  
          $(self.$refs.$audio).attr("src",e.target.result);
          self.$refs.$audio.load()
          self.$refs.$audio.oncanplay = function() {
            self.duration = self.$refs.$audio.duration
            self.finish()
          }
        }
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
      initInfo() {
        if (!isNumber(this.$route.params.id)) {
          return 
        }
        getSongInfo(this.$route.params.id,(res)=>{
          if (res.data.code == 200) {
            this.songName = res.data.result.songName
            this.singer = res.data.result.singer
            this.lyric = res.data.result.lyric
            this.weight = res.data.result.weight
            this.duration = res.data.result.duration
            this.categoryNames = res.data.result.categoryIds
            this.coverResource = global.musicCoverUrl + res.data.result.cover
            this.musicResource = global.musicResourceUrl + res.data.result.url
          }
        })
      }, 
      finish() {
        editMusicApi(this.$route.params.id,this,(res)=>{
          if (res.data.code == 200) {
            this.error = '修改成功' 
          } else {
            this.error = res.data.msg
          }
        })
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "./EditMusic.scss"
</style>
