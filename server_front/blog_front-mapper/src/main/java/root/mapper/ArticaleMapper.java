package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Articale;

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
}