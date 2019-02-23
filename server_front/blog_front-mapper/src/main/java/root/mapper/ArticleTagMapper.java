package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import root.model.Article;
import root.model.ArticleTag;

public interface ArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleTag record);

    int insertSelective(ArticleTag record);

    ArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleTag record);

    int updateByPrimaryKey(ArticleTag record);
    /**
     * 获取全部标签
     * @return
     */
	List<ArticleTag> all();
	/**
	 * 文章的所有标签
	 * @param articleId
	 * @return
	 */
	List<ArticleTag> getArticleTagListByArticleId(@Param("articleId") Integer articleId);
}