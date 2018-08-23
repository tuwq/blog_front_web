package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.SongBindCategory;

@Mapper
public interface SongBindCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongBindCategory record);

    int insertSelective(SongBindCategory record);

    SongBindCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongBindCategory record);

    int updateByPrimaryKey(SongBindCategory record);
}