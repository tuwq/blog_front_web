package root.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExUtil {
	
	public static boolean RegExMail(String mail) {
		String regEx = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";;
		Pattern pattern = Pattern.compile(regEx);
		Matcher matcher = pattern.matcher(mail);
		return matcher.matches(); 
	}
	
	public static boolean RegQQNumber(String number) {
		String regEx = "^[1-9]\\d{4,10}$";;
		Pattern pattern = Pattern.compile(regEx);
		Matcher matcher = pattern.matcher(number);
		return matcher.matches(); 
	}

	
	public static void main(String[] args) {
		
	}
	
}

