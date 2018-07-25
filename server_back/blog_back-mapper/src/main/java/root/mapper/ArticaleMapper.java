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
     * 获得总数
     * @return
     */
	Long countAll();
	/**
	 * 获得分页数据
	 * @param pageSize
	 * @param skip
	 */
	List<Articale> page(@Param("pageSize") Integer pageSize,@Param("skip") Integer skip);
	/**
	 * 批量删除
	 * @param ids
	 */
	void delBatch(@Param("ids") List<Integer> ids);
	/**
	 * 批量修改，取反状态1和0
	 * @param ids
	 */
	void updateBatch(@Param("ids") List<Integer> ids);
	/**
	 * 获得总数,过滤条件后的总数
	 * @param keyword
	 * @return
	 */
	Long countAllByKeyWord(@Param("keyword") String keyword);
	/**
	 * 获得分页数据，过滤条件后的数量
	 * @param keyword
	 * @param integer2 
	 * @param integer 
	 */
	List<Articale> pageByKeyWord(@Param("keyword") String keyword, 
			@Param("pageSize") Integer pageSize, @Param("skip") Integer skip);
	/**
	 * 是否存在文章
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
	
}