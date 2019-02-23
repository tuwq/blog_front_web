package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticleTag;

@Mapper
public interface ArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleTag record);

    int insertSelective(ArticleTag record);

    ArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleTag record);

    int updateByPrimaryKey(ArticleTag record);
    /**
     * 所有标签
     * @return
     */
	List<ArticleTag> findAll();
	/**
	 * 获取指定文章的标签列表
	 * @param id
	 * @return
	 */
	List<ArticleTag> getArticleTagListById(@Param("articleId") Integer articleId);
}