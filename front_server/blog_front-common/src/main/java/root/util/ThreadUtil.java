package root.util;

import javax.servlet.http.HttpServletRequest;

public class ThreadUtil {

	private static final ThreadLocal<HttpServletRequest> requestHolder = new ThreadLocal<HttpServletRequest>();
	
	public static void add(HttpServletRequest request) {
		requestHolder.set(request);
	}
	
	public static HttpServletRequest getCurrentRequest() {
		return requestHolder.get();
	}
	
	public static void remove() {
		requestHolder.remove();
	}
	
}
