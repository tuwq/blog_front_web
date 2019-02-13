package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticleCategory;

public interface ArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleCategory record);

    int insertSelective(ArticleCategory record);

    ArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleCategory record);

    int updateByPrimaryKey(ArticleCategory record);
    /**
     * 分类Id是否存在
     * @param id
     * @return
     */
	int countById(@Param("id") Integer id);
	/**
	 * 获得文章的分类信息
	 * @param integer
	 * @return
	 */
	List<ArticleCategory> getArtCategoryListById(@Param("id") Integer id);
}