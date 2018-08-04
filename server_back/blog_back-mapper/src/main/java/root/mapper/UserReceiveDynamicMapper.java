package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.UserReceiveDynamic;

@Mapper
public interface UserReceiveDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserReceiveDynamic record);

    int insertSelective(UserReceiveDynamic record);

    UserReceiveDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserReceiveDynamic record);

    int updateByPrimaryKey(UserReceiveDynamic record);
}