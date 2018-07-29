package root.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExUtil {
	
	public static boolean RegExMail(String mail) {
		String regEx = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
		Pattern pattern = Pattern.compile(regEx);
		Matcher matcher = pattern.matcher(mail);
		return matcher.matches(); 
	}

	
	public static void main(String[] args) {
		/*boolean flag = RegExUtil.RegExMail("1s2312312363.com");
		System.out.println(flag);*/
	}
	
}

