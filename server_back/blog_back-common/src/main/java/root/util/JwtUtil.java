package root.util;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.Map;

import org.apache.commons.lang3.time.DateUtils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator.Builder;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Maps;

import root.exception.LoginTokenException;
import root.exception.WebException;

public class JwtUtil {
	
	private static final String LOGIN_TOKEN = "LOGIN_TOKEN";
	
	private static final String ISSUE = "tuwq";
	
	// 生成token
	public static String getToken(Map<String, String> claims) {
		try {
			// 加密算法API
			Algorithm algorithm = Algorithm.HMAC256(LOGIN_TOKEN);
			Builder builder= JWT.create()
					.withIssuer(ISSUE)
					.withExpiresAt(DateUtils.addDays(new Date(), 1));
			// 为jwt添加一些信息
			claims.forEach((k,v) -> builder.withClaim(k, v));
			return builder.sign(algorithm).toString();
		} catch (IllegalArgumentException | UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}
	
	// 解析token
	public static Map<String, String> verifyToken(String token,Class clazz,Object from,String methodName) {
		Algorithm algorithm = null;
		try {
			algorithm = Algorithm.HMAC256(LOGIN_TOKEN);
		}catch(IllegalArgumentException | UnsupportedEncodingException | SignatureVerificationException e) {
			e.printStackTrace();
		}
		JWTVerifier verifier = JWT.require(algorithm).withIssuer(ISSUE).build();
		DecodedJWT jwt = null;
		try {
			jwt = verifier.verify(token);
		} catch (SecurityException | SignatureVerificationException e1) {
			// TOKEN到期了,应该用回调
			try {
				Method method = clazz.getMethod(methodName);
				try {
					method.invoke(from);
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					// 获得反射方法中抛出的异常
					// 抛出的异常是否实现了自定义的异常类接口
					RuntimeException targetException =(RuntimeException) e.getTargetException();
					if(WebException.class.isAssignableFrom(targetException.getClass()) ) {
						throw targetException;
					}
					e.printStackTrace();
				}
			} catch (NoSuchMethodException e) {
				e.printStackTrace();
			} catch (SecurityException e) {
				e.printStackTrace();
			}
		}
	    // 如果是伪造的那么上面会抛出异常而不执行这里
		Map<String, Claim> map = jwt.getClaims();
		Map<String, String> resultMap = Maps.newHashMap();
		map.forEach((k,v) -> resultMap.put(k, v.asString()));
		return resultMap;
	}
	
	// 解析token
	public static Map<String, String> verifyToken(String token) {
		Algorithm algorithm = null;
		try {
			algorithm = Algorithm.HMAC256(LOGIN_TOKEN);
		}catch(IllegalArgumentException | UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
		JWTVerifier verifier = JWT.require(algorithm).withIssuer(ISSUE).build();
		DecodedJWT jwt = null;
		try {
			jwt =verifier.verify(token);
		} catch (SecurityException | SignatureVerificationException e1) {
			throw new LoginTokenException("LOGIN_TOKEN是伪造的");
		}
		Map<String, Claim> map = jwt.getClaims();
		Map<String, String> resultMap = Maps.newHashMap();
		map.forEach((k,v) -> resultMap.put(k, v.asString()));
		return resultMap;
	}
	
	public static void main(String[] args) {
		
	}
}
