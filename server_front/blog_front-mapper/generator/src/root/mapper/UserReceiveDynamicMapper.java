package root.mapper;

import root.model.UserReceiveDynamic;

public interface UserReceiveDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserReceiveDynamic record);

    int insertSelective(UserReceiveDynamic record);

    UserReceiveDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserReceiveDynamic record);

    int updateByPrimaryKey(UserReceiveDynamic record);
}