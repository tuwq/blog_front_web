package root.mapper;

import root.model.FrontImgConfig;

public interface FrontImgConfigMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FrontImgConfig record);

    int insertSelective(FrontImgConfig record);

    FrontImgConfig selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FrontImgConfig record);

    int updateByPrimaryKey(FrontImgConfig record);
}