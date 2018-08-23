package root.mapper;

import root.model.SongBindCategory;

public interface SongBindCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongBindCategory record);

    int insertSelective(SongBindCategory record);

    SongBindCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongBindCategory record);

    int updateByPrimaryKey(SongBindCategory record);
}