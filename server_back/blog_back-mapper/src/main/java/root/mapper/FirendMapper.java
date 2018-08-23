package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Firend;

@Mapper
public interface FirendMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Firend record);

    int insertSelective(Firend record);

    Firend selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Firend record);

    int updateByPrimaryKey(Firend record);
    /**
     * 获得友链总数
     * @return
     */
	Long countAll();
	/**
	 * 获得分页数据
	 * @param currentPage
	 * @param pageSize
	 * @return
	 */
	List<Firend> page(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 批量删除
	 * @param ids
	 */
	void delBatch(@Param("ids") List<Integer> ids);
	/**
	 * 友链信息
	 * @param id
	 * @return
	 */
	Firend info(@Param("id") Integer id);
	/**
	 * 是否存在
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
}