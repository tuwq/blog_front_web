package root.mapper;

import root.model.UserDynamic;

public interface UserDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserDynamic record);

    int insertSelective(UserDynamic record);

    UserDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserDynamic record);

    int updateByPrimaryKey(UserDynamic record);
}