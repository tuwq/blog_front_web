package root.mapper;

import root.model.SongCategory;

public interface SongCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongCategory record);

    int insertSelective(SongCategory record);

    SongCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongCategory record);

    int updateByPrimaryKey(SongCategory record);
}