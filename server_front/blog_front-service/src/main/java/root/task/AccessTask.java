package root.task;

import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import root.constant.RedisCode;
import root.mapper.AccessMapper;
import root.model.Access;
import root.redis.RedisOperator;
import root.util.JsonUtils;
import root.util.TimeUtil;

@Component
public class AccessTask {

	@Resource
	private RedisOperator redis;
	@Resource
	private AccessMapper accessMapper;

	@Scheduled(cron="0 0 0 * * ?")
	public void handlerAccess() {
		// 获得redis中的数据
		// 对象化存入数据库中
		// 昨天到今天位置有没有这条ip的信息
		// 存入数据库,清空redis
		Map<Object, Object> map = redis.hgetall(RedisCode.IP_STORAGE);
		if(map == null) {
			return;
		}
		Set<Entry<Object, Object>> entrySet = map.entrySet();
		for (Entry<Object, Object> entry : entrySet) {
			try {
				if (entry == null ) {
					return;
				}
				Access access = JsonUtils.jsonToPojo(entry.getValue().toString(), Access.class);
				String beforeTime = TimeUtil.format(TimeUtil.getSkipTime(Calendar.DATE, -1));
				String nowTime = TimeUtil.format(new Date().getTime());
				int count = accessMapper.countByIdAndDate(beforeTime, nowTime, access.getIpAddress());
				if (count == 0) {
					accessMapper.insertSelective(access);
				}
				redis.del(RedisCode.IP_STORAGE);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		
	}
}
