package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Access;

public interface AccessMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Access record);

    int insertSelective(Access record);

    Access selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Access record);

    int updateByPrimaryKey(Access record);
    /**
     * 获得今天的ip数据
     * @return
     */
	List<Access> getNowDayData(@Param("beforeTime") String beforeTime,@Param("toTime") String toTime);
	/**
	 * 指定日期中有没有重复ip
	 */
	int countByIdAndDate(@Param("beforeTime") String beforeTime,@Param("toTime") String toTime,@Param("ipAddress") String ipAddress);

}