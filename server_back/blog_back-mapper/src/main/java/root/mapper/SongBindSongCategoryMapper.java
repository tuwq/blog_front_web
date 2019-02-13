package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SongBindSongCategory;

@Mapper
public interface SongBindSongCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongBindSongCategory record);

    int insertSelective(SongBindSongCategory record);

    SongBindSongCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongBindSongCategory record);

    int updateByPrimaryKey(SongBindSongCategory record);
    /**
     * 批量添加
     * @param sbinList
     */
	void insertBatch(@Param("list") List<SongBindSongCategory> sbinList);
	/**
	 * 批量删除歌曲分类关系
	 * @param ids
	 */
	void delBatch(@Param("songIds") List<Integer> songIds);
}