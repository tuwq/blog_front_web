package root.util;

import java.util.List;
import java.util.Map;

import com.google.common.base.Joiner;
import com.google.common.base.Splitter;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

public class SplitterUtil {
	
	public static void main(String[] args) {
		String str = "abc.jpg";
		String[] split = str.split("\\.");
		for (String s : split) {
			System.out.println(s);	// abc,jpg
		}
		
		String[] joinArray = {"a","b","c","d"};
		String j = Joiner.on(".").join(joinArray);
		System.out.println(j); // "a.b.c.d"
		
		Map<String, String> joinMap = Maps.newHashMap();
		joinMap.put("a", "1");
		joinMap.put("b", "2");
		joinMap.put("c", "3");
		String m = Joiner.on("&")
		.useForNull("")
		.withKeyValueSeparator("=")
		.join(joinMap);
		System.out.println(m);	// a=1&b=2&c=3
		
		String splitStr = "q,";
		List<String> splitToList = Splitter.on(",").trimResults().omitEmptyStrings()
							.splitToList(splitStr);
		for (String sp: splitToList) {
			System.out.println(sp); // q,w,e,rty
		}
		
		List<String> list = Lists.newArrayList();
		list.add("文章");
		list.add("教程");
		String join = String.join(",", list);
		System.out.println(join);
	}
}
