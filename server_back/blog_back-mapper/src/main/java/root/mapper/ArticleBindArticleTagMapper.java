package root.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticleBindArticleCategory;
import root.model.ArticleBindArticleTag;

@Mapper
public interface ArticleBindArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleBindArticleTag record);

    int insertSelective(ArticleBindArticleTag record);

    ArticleBindArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleBindArticleTag record);

    int updateByPrimaryKey(ArticleBindArticleTag record);
    /**
     * 批量插入
     * @param list
     */
	int insertBatch(@Param("list") List<ArticleBindArticleTag> list);
	/**
	 * 批量删除
	 */
	int delBatch(@Param("ids") List<Integer> ids);
}