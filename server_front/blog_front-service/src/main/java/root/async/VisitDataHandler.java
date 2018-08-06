package root.async;

import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import root.mapper.UserReceiveDynamicMapper;
import root.model.UserReceiveDynamic;

@Service
public class VisitDataHandler {

	@Resource
	private UserReceiveDynamicMapper userReceiveDynamicMapper;
	
	public void visitReceiveDynamic(List<UserReceiveDynamic> receiveDynamicList) {
		// 修改接收动态的观看状态
		if (receiveDynamicList.size()==0) {
			return;
		}
		List<Integer> ids = receiveDynamicList.stream().map(item ->
			item.getId()
		).collect(Collectors.toList());
		userReceiveDynamicMapper.updateBatchVisit(ids);
	}
}
