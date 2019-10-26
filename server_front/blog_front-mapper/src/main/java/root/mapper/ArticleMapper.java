package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Article;
import root.param.PageParam;

public interface ArticleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Article record);

    int insertSelective(Article record);

    Article selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Article record);

    int updateByPrimaryKeyWithBLOBs(Article record);

    int updateByPrimaryKey(Article record);
    /**
     * 根据praise字段和更新时间,获得指定数量的火热文章
     * @param quantity
     * @return
     */
	List<Article> praiseByQuantity(@Param("quantity") Integer quantity);
	/**
	 * 根据praise字段和更新时间，获得指定数量和分类的文章
	 * @param quantity
	 * @return
	 */
	List<Article> categoryArticle(@Param("category_id") Integer category_id,@Param("quantity") Integer quantity);
	/**
	 * 获取指定数量评论最多的文章
	 * @param quantity
	 * @return
	 */
	List<Article> hotDiscuss(@Param("quantity") Integer quantity);
	/**
	 * 分类下的文章总数
	 * @param id
	 * @return
	 */
	Long countAllByCategoryId(@Param("categoryId") Integer category_id);
	/**
	 * 指定分类下的文章分页数据
	 * @param param
	 * @param id
	 * @return
	 */
	List<Article> categoryPage(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("categoryId") Integer category_id);
	/**
	 * 查找符合关键字的文章数量,符合包括文章标题,属于分类,文章内容
	 * @param keyword
	 * @return
	 */
	Long countByKeyword(@Param("keyword") String keyword);
	/**
	 * 查找符合关键字的文章，符合包括文章标题，属于分类，文章内容
	 * @param keyword
	 * @param skip
	 * @param pageSize
	 * @return
	 */
	List<Article> pageByKeyWord(@Param("keyword")String keyword,@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 查找文章总数
	 * @return
	 */
	Long countAll();
	/**
	 * 获得文章的分页数据和每个文章的用户信息
	 * @param skip
	 * @param pageSize
	 * @return
	 */
	List<Article> pageWithUser(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 文章是否存在
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
	/**
	 * 获得指定文章的信息和用户信息
	 * @param id
	 * @return
	 */
	Article getByIdWithUser(@Param("id") Integer id);
	/**
	 * 获得当前文章的上一篇文章信息
	 * @param id
	 * @return
	 */
	Article getPrev(@Param("id") Integer id);
	/**
	 * 获得当前文章的下一篇文章信息
	 * @param id
	 * @return
	 */
	Article getNext(@Param("id") Integer id);
	/**
	 * 文章的评论数量增加
	 * @param articleId
	 */
	void commentSumIncr(@Param("id") Integer id);
	/**
	 * 获得文章作者的id
	 * @param articleId
	 * @return
	 */
	Integer getAuthIdById(@Param("id") Integer id);
	/**
	 * 文章的点赞数自增
	 * @param articleId
	 */
	void praiseSumIncr(@Param("id") Integer id);
	/**
	 * 文章的浏览量自增
	 * @param articleId
	 */
	void browseSumIncr(@Param("id") Integer id);
	/**
	 * 文章作者的点赞数增加
	 * @param articleId
	 */
	void authPraiseSumIncr(@Param("articleId") Integer articleId);
	/**
	 * 根据weight获得指定数量的文章
	 * @param quantity
	 * @return
	 */
	List<Article> weightByQuantity(@Param("quantity") Integer quantity);
	/**
	 * 根据创建时间获得最新的文章
	 * @param quantity
	 * @return
	 */
	List<Article> createTimeByQuantity(@Param("quantity") Integer quantity);
	/**
	 * 
	 * @param articleTagId
	 * @return
	 */
	Long countByArticleTag(@Param("articleTagId") Integer articleTagId);
	/**
	 * 标签下的所有文章
	 * @param articleTagId2 
	 * @param integer 
	 */
	List<Article> pageArticleByArticleTagId(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("articleTagId")  Integer articleTagId2);
	/**
	 * 时间归档排序
	 * @param skip
	 * @param pageSize
	 * @return
	 */
	List<Article> pageAllByCreateTime(@Param("skip") Integer skip, @Param("pageSize") Integer pageSize);

	/**
	 * 指定数量随机取出文章
	 * @param quantity
	 * @return
	 */
    List<Article> randomArticleByQuantity(@Param("quantity") Integer quantity);
}