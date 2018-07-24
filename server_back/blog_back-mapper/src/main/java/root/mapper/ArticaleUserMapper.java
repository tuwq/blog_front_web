package root.mapper;

import root.model.ArticaleUser;

public interface ArticaleUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticaleUser record);

    int insertSelective(ArticaleUser record);

    ArticaleUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticaleUser record);

    int updateByPrimaryKey(ArticaleUser record);
}