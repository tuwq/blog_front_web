package root.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {
	
	private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
    public static String format(Long second) {
		return format.format(second);
    }
	
	public static void main(String[] args) {
		System.out.println(new Date());
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		System.out.println(format.format(new Date()));
		System.out.println(TimeAgoUtils.format(new Date()));
		System.out.println(format.format(new Date(new Date().getTime())));
	}

}
