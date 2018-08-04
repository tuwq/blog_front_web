package root.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class TimeUtil {
	
	private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	private static SimpleDateFormat formatNoSecond = new SimpleDateFormat("yyyy-MM-dd");
	private static Calendar c = new GregorianCalendar();
	
    public static String format(Long second) {
		return format.format(second);
    }
    
    public static String formatNoSecond(Long second) {
		return formatNoSecond.format(second);
    }
	
    public static String nowYear() {
    	Calendar date = Calendar.getInstance();
    	String year = String.valueOf(date.get(Calendar.YEAR));
    	return year;
    }
    
    public static String nowMonth() {
    	Calendar date = Calendar.getInstance();
    	String month = String.valueOf(date.get(Calendar.MONTH)+1);
    	return month;
    }
    
    public static long getSkipTime(int CalendarType,int timeout) {
    	c.setTime(new Date());
    	c.add(CalendarType, timeout);
    	return c.getTime().getTime();
    }
    
	public static void main(String[] args) {
		long skipTime = TimeUtil.getSkipTime(Calendar.MINUTE, 60);
		System.out.println(skipTime);
	}

}