package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticleCategory;
@Mapper
public interface ArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleCategory record);

    int insertSelective(ArticleCategory record);

    ArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleCategory record);

    int updateByPrimaryKey(ArticleCategory record);
    /**
     * 获得指定文章id的分类列表
     * @param integer
     * @return
     */
	List<ArticleCategory> getArtCategoryListById(@Param("id") Integer id);
	/**
	 * 获得全部的分类
	 * @return
	 */
	List<ArticleCategory> getAll();
}