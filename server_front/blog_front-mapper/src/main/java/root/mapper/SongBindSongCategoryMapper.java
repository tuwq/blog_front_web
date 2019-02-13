package root.mapper;

import root.model.SongBindSongCategory;

public interface SongBindSongCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongBindSongCategory record);

    int insertSelective(SongBindSongCategory record);

    SongBindSongCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongBindSongCategory record);

    int updateByPrimaryKey(SongBindSongCategory record);
}