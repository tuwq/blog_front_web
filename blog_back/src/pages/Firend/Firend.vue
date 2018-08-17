<template>
  <div id="Firend" class="Firend">
      <div class="wrap">
        <div class="utils">
          <button class="delBtn" @click.stop="delBatch">批量删除</button>
        </div>
        <div class="data-list-wrapper">
          <ul class="meta">
            <li><span>昵称</span></li>
            <li><span>头像</span></li>
            <li><span>描述</span></li>
            <li><span>网站</span></li>
            <li><span>操作</span></li>
          </ul>
        </div>
        <FirendList ref="$firendList"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import FirendList from './subpages/FirendList/FirendList'
  import { delBatchApi } from 'api/Firend/firend'
  export default {  
    components: {
      FirendList
    },
    data() {
      return {
        
      }
    },
    methods: {
      delBatch() {
        if(confirm("确定要删除这些友链吗?")) {
           var items = $('.Firend .opearcheck[type="checkbox"]:checked')
           if(items.length > 0) {
              var ids = ''
              items.each((index,item)=>{
                ids += $(item).val() + ','
              })
              delBatchApi(ids,(res)=>{
                if (res.data.code == 200) {
                  this.$refs.$firendList.pageData(1)
                }
              })
           }
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Firend.scss";
</style>
