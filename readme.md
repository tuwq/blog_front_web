# 全栈我的博客 https://twenq.com
# 技术栈
## 前台展示,兼容chrome,firefox,edge.支持响应式
	前端:	Less + React + Redux + jQuery

	后端: 	SpringBoot + MyBatis

	数据库:	MySql + Redis

## 后台管理
	前端:	Sass + Vue + Vuex + jQuery + Echarts

	后端: 	SpringMVC + MyBatis 

	数据库:	MySql + Redis
## 可优化设计(TODO)
服务端  
1. 为Token设计表,便于扩展授权
2. 将服务端配置全部编写为类对象便于管理和维护
3. 优化多表查询的的SQL和冗余性的代码
4. 把文章和文章分类的多对多关系拆分成文章分类和文章标签

前端
1. 运用redux-thunk执行异步来提高性能
2. 为常用组件添加immutable使得更加易于复用和规范化
3. 优化标签嵌套

可添加功能
1. 更多的分类和文章标签
2. 重构歌单
3. 添加相册
4. 添加视频
