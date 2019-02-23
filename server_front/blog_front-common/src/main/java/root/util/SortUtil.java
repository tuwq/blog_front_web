package root.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class SortUtil {
	
	public static LinkedHashMap sortHasMap(Map k_v){
		ArrayList<Entry<?, ?>> list = new ArrayList<Map.Entry<?, ?>>(k_v.entrySet());
		Collections.sort(list, new Comparator<Map.Entry<?, ?>>() {
			@Override
			public int compare(Entry<?, ?> o1,
					Entry<?, ?> o2) {
				// 升序排序
				return Integer.parseInt((String) o2.getKey())-Integer.parseInt((String) o1.getKey());
			}
		});
		
		LinkedHashMap linkedHashMap = new LinkedHashMap();
		for(Map.Entry entry: list){
            linkedHashMap.put(entry.getKey(),entry.getValue());
        }
		return linkedHashMap;
	}
	
	public static void main(String[] args) {
		/*HashMap<String, List<String>> k_v = new HashMap<String, List<String>>();
		k_v.put("2019", new ArrayList<String>());
		k_v.put("2017", new ArrayList<String>());
		k_v.put("2018", new ArrayList<String>());
		
		LinkedHashMap sortHasMap = SortUtil.sortHasMap(k_v);
		Set<Map.Entry> entrySet = sortHasMap.entrySet();
		for (Map.Entry entry : entrySet) {
            System.out.println("key:" + entry.getKey() + ",value:" + entry.getValue());
        }*/
	}
}
