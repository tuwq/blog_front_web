package root.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class TimeUtil {
	
	// simpleDateFormat线程不安全
	private final static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	private final static SimpleDateFormat formatNoSecond = new SimpleDateFormat("yyyy-MM-dd");
	private final static Calendar c = new GregorianCalendar();
	// private static DateTimeFormatter format = DateTimeFormat.forPattern("yyyyMMdd");
	// private static DateTimeFormatter formatNoSecond = DateTimeFormat.forPattern("yyyyMMdd");
	
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
    
    public static String getYearByTimeStamp(Date date) {
	   Calendar now = Calendar.getInstance();
	   now.setTime(date);
	   return now.get(Calendar.YEAR) + "";
       /*System.out.println("年: " + now.get(Calendar.YEAR));  
       System.out.println("月: " + (now.get(Calendar.MONTH) + 1) + "");  
       System.out.println("日: " + now.get(Calendar.DAY_OF_MONTH));  
       System.out.println("时: " + now.get(Calendar.HOUR_OF_DAY));  
       System.out.println("分: " + now.get(Calendar.MINUTE));  
       System.out.println("秒: " + now.get(Calendar.SECOND));  
       System.out.println("当前时间毫秒数：" + now.getTimeInMillis());  
       System.out.println(now.getTime());  */
    }
    
    public static String getMonthByDate(Date date) {
       Calendar now = Calendar.getInstance();
  	   now.setTime(date);
  	   return (now.get(Calendar.MONTH) + 1) + "";
    }
    
    public static String getDayOfMonth(Date date) {
    Calendar now = Calendar.getInstance();
   	   now.setTime(date);
   	   return now.get(Calendar.DAY_OF_MONTH) + "";
    }
    
	public static void main(String[] args) {
		/*long skipTime = TimeUtil.getSkipTime(Calendar.MINUTE, 60);
		System.out.println(skipTime);
		String beforeTime = TimeUtil.format(TimeUtil.getSkipTime(Calendar.DATE, -1));
		String nowTime = TimeUtil.format(new Date().getTime());
		System.out.println(beforeTime);
		System.out.println(nowTime);*/
		// 1547211266000	1547197161000 1547022585000
		String yearByTimeStamp = TimeUtil.getYearByTimeStamp(new Date(1547022585000L));
		String monthByDate = TimeUtil.getMonthByDate(new Date(1547022585000L));
		String dayOfMonth = TimeUtil.getDayOfMonth(new Date(1547022585000L));
		System.out.println(yearByTimeStamp + "年" + monthByDate + "月" + dayOfMonth + "日");
	}

}
