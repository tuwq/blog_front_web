package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.UserReceiveDynamic;

@Mapper
public interface UserReceiveDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserReceiveDynamic record);

    int insertSelective(UserReceiveDynamic record);

    UserReceiveDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserReceiveDynamic record);

    int updateByPrimaryKey(UserReceiveDynamic record);
    /**
     * 批量删除被动动态根据主动动态id
     * @param initiateIds
     */
	void delBatchByInitiateIds(@Param("initiateIds") List<Integer> initiateIds);
}