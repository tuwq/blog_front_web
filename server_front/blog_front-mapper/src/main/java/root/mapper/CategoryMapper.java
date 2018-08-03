package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Category;

@Mapper
public interface CategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Category record);

    int insertSelective(Category record);

    Category selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Category record);

    int updateByPrimaryKey(Category record);
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
	List<Category> getArtCategoryListById(@Param("id") Integer id);
}