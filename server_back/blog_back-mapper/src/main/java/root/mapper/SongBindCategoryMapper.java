package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SongBindCategory;

@Mapper
public interface SongBindCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongBindCategory record);

    int insertSelective(SongBindCategory record);

    SongBindCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongBindCategory record);

    int updateByPrimaryKey(SongBindCategory record);
    /**
     * 批量添加
     * @param sbinList
     */
	void insertBatch(@Param("list") List<SongBindCategory> sbinList);
	/**
	 * 批量删除歌曲分类关系
	 * @param ids
	 */
	void delBatch(@Param("songIds") List<Integer> songIds);
}