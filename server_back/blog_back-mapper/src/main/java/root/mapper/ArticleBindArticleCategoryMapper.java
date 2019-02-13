package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticleBindArticleCategory;

@Mapper
public interface ArticleBindArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleBindArticleCategory record);

    int insertSelective(ArticleBindArticleCategory record);

    ArticleBindArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleBindArticleCategory record);

    int updateByPrimaryKey(ArticleBindArticleCategory record);
    
    /**
     * 批量添加文章分类关系
     */
    int insertBatch(@Param("list") List<ArticleBindArticleCategory> list);
    /**
     * 批量删除文章分类关系
     * @param ids
     */
	void delBatch(@Param("ids") List<Integer> ids);
	
}