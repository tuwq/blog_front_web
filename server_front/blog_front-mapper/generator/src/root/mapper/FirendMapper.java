package root.mapper;

import root.model.Firend;

public interface FirendMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Firend record);

    int insertSelective(Firend record);

    Firend selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Firend record);

    int updateByPrimaryKey(Firend record);
}