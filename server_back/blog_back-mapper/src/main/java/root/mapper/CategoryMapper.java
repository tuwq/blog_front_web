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
     * 获得指定文章id的分类列表
     * @param integer
     * @return
     */
	List<Category> getArtCategoryListById(@Param("id") Integer id);
	/**
	 * 获得全部的分类
	 * @return
	 */
	List<Category> getAll();
}