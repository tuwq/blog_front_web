package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Articale;
import root.param.PageParam;

@Mapper
public interface ArticaleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Articale record);

    int insertSelective(Articale record);

    Articale selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Articale record);

    int updateByPrimaryKeyWithBLOBs(Articale record);

    int updateByPrimaryKey(Articale record);
    /**
     * 根据praise字段和更新时间,获得指定数量的火热文章
     * @param quantity
     * @return
     */
	List<Articale> praiseByQuantity(@Param("quantity") Integer quantity);
	/**
	 * 根据praise字段和更新时间，获得指定数量和分类的文章
	 * @param quantity
	 * @return
	 */
	List<Articale> categoryArticale(@Param("category_id") Integer category_id,@Param("quantity") Integer quantity);
	/**
	 * 获取指定数量评论最多的文章
	 * @param quantity
	 * @return
	 */
	List<Articale> hotDiscuss(@Param("quantity") Integer quantity);
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
	List<Articale> categoryPage(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("categoryId") Integer category_id);
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
	List<Articale> pageByKeyWord(@Param("keyword")String keyword,@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
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
	List<Articale> pageWithUser(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
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
	Articale getByIdWithUser(@Param("id") Integer id);
	/**
	 * 获得当前文章的上一篇文章信息
	 * @param id
	 * @return
	 */
	Articale getPrev(@Param("id") Integer id);
	/**
	 * 获得当前文章的下一篇文章信息
	 * @param id
	 * @return
	 */
	Articale getNext(@Param("id") Integer id);
	/**
	 * 文章的评论数量增加
	 * @param articleId
	 */
	void commentSumIncr(@Param("id") Integer articleId);
	/**
	 * 获得文章作者的id
	 * @param articleId
	 * @return
	 */
	Integer getAuthIdById(@Param("id") Integer articleId);
	
}