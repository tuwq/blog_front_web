package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.dto.EveryDayDto;
import root.model.Access;

@Mapper
public interface AccessMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Access record);

    int insertSelective(Access record);

    Access selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Access record);

    int updateByPrimaryKey(Access record);
    /**
     * 获得访问量总数
     * @return
     */
	Long countAll();
	/**
	 * 指定
	 * @param beforeWeekTime
	 * @param nowTime
	 * @return
	 */
	List<EveryDayDto> everyDayByBettwen(@Param("beforeTime") String beforeTime,@Param("toTime") String toTime);
	
}