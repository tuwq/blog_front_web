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
     * 友链数量
     * @return
     */
	Long countAll();
	/**
	 * 根据id列表获得所有友链
	 * @return
	 */
	List<Firend> getAllByIds(@Param("ids") List<Integer> ids);
	/**
	 * 获得随机id列表
	 * @return
	 */
	List<Integer> randomAll();

}