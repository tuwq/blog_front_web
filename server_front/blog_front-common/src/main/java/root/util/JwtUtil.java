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
import com.auth0.jwt.exceptions.InvalidClaimException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Maps;

import root.constant.ResultCode;
import root.exception.TokenException;
import root.exception.WebException;

public class JwtUtil {
	
	private static final String SALT = "BLOG_TOKEN";
	
	private static final String ISSUE = "tuwq";
	
	
	// 生成token
	public static String getToken(Map<String, String> claims) {
		try {
			// 加密算法API
			Algorithm algorithm = Algorithm.HMAC256(SALT);
			Builder builder= JWT.create()
					.withIssuer(ISSUE);
			// .withExpiresAt(DateUtils.addDays(new Date(), 7));
			// 为jwt添加一些信息
			claims.forEach((k,v) -> builder.withClaim(k, v));
			return builder.sign(algorithm).toString();
		} catch (IllegalArgumentException | UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}
	
	// 解析token
	public static Map<String, String> verifyToken(String token) {
		Algorithm algorithm = null;
		try {
			algorithm = Algorithm.HMAC256(SALT);
		}catch(Exception e) {
			throw new RuntimeException(e);
		}
		JWTVerifier verifier = JWT.require(algorithm).withIssuer(ISSUE).build();
		DecodedJWT jwt = null;
		try {
			jwt =verifier.verify(token);
		} catch (Exception  e1) {
			throw new TokenException(ResultCode.TOKEN_NOTUSER,"TOKEN无法解析");
		}
		Map<String, Claim> map = jwt.getClaims();
		Map<String, String> resultMap = Maps.newHashMap();
		map.forEach((k,v) -> resultMap.put(k, v.asString()));
		return resultMap;
	}
	
	public static void main(String[] args) {
		
	}
}
