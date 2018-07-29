package root.mapper;

import root.model.Articale;

public interface ArticaleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Articale record);

    int insertSelective(Articale record);

    Articale selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Articale record);

    int updateByPrimaryKeyWithBLOBs(Articale record);

    int updateByPrimaryKey(Articale record);
}