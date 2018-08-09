package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import root.model.FrontImgConfig;

@Mapper
public interface FrontImgConfigMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FrontImgConfig record);

    int insertSelective(FrontImgConfig record);

    FrontImgConfig selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FrontImgConfig record);

    int updateByPrimaryKey(FrontImgConfig record);
    /**
     * 获得全部配置
     * @return
     */
	List<FrontImgConfig> getAll();
}