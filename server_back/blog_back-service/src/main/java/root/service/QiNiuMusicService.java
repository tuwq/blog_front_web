package root.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;

import root.constant.ResultCode;
import root.exception.FileUploadException;

@Service
public class QiNiuMusicService {
	
	@Value("${qiniuAcKey}")
	private String qiniuAcKey;
	@Value("${qiniuSeKey}")
	private String qiniuSeKey;
	@Value("${qiniuMusicBucket}")
	private String qiniuMusicBucket;
	@Value("${musicCoverPrefix}")
	private String musicCoverPrefix;
	@Value("${musicResourcePrefix}")
	private String musicResourcePrefix;
	private Configuration cfg = new Configuration(Zone.zone2());
	private UploadManager uploadManager = new UploadManager(cfg);
	
	public void cover(MultipartFile cover, String coverPath) {
		// 覆盖上传封面至七牛云
		String key = musicCoverPrefix + coverPath;
		byte[] uploadBytes = null;
		try {
			uploadBytes = cover.getBytes();
		} catch (IOException e) {
			throw new FileUploadException(ResultCode.FILE_UPLOAD_FAIL,"读取文件字节失败");
		}
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		long expireSeconds = 3600;
		String upToken = auth.uploadToken(qiniuMusicBucket, key, expireSeconds, new StringMap().put("insertOnly",0));
		try {
		    Response response = uploadManager.put(uploadBytes, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		    	throw new FileUploadException(ResultCode.FILE_UPLOAD_FAIL,"上传文件至七牛云失败");
		    }
		}
	}

	public void music(MultipartFile music, String musicPath) {
		// 覆盖上传封面至七牛云
		String key = musicResourcePrefix + musicPath;
		byte[] uploadBytes = null;
		try {
			uploadBytes = music.getBytes();
		} catch (IOException e) {
			throw new FileUploadException(ResultCode.FILE_UPLOAD_FAIL,"读取文件字节失败");
		}
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		long expireSeconds = 3600;
		String upToken = auth.uploadToken(qiniuMusicBucket, key, expireSeconds, new StringMap().put("insertOnly",0));
		try {
		    Response response = uploadManager.put(uploadBytes, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		    	throw new FileUploadException(ResultCode.FILE_UPLOAD_FAIL,"上传文件至七牛云失败");
		    }
		}
	}

	public void delCover(String cover) {
		// 删除封面
		String key = musicCoverPrefix + cover;		
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.delete(qiniuMusicBucket, key);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明删除失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}

	public void delMusic(String url) {
		// 删除音乐
		String key = musicResourcePrefix + url;		
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.delete(qiniuMusicBucket, key);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明删除失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}
}
