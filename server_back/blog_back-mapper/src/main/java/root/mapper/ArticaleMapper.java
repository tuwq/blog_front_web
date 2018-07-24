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
}