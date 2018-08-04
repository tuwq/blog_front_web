package root.mapper;

import root.model.UserInitiateDynamic;

public interface UserInitiateDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserInitiateDynamic record);

    int insertSelective(UserInitiateDynamic record);

    UserInitiateDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserInitiateDynamic record);

    int updateByPrimaryKey(UserInitiateDynamic record);
}