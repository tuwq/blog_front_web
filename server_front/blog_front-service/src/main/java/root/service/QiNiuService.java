package root.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;

import root.constant.ResultCode;
import root.exception.FileUploadException;


@Service
public class QiNiuService {

	@Value("${qiniuAcKey}")
	private String qiniuAcKey;
	@Value("${qiniuSeKey}")
	private String qiniuSeKey;
	@Value("${qiniuImgBucket}")
	private String qiniuImgBucket;
	@Value("${qiniuUserAvatarPrefix}")
	private String qiniuUserAvatarPrefix;
	private Configuration cfg = new Configuration(Zone.zone2());
	private UploadManager uploadManager = new UploadManager(cfg);
	
	public void avatar(MultipartFile file, String fileName) {
		String originName = file.getOriginalFilename();
		// 覆盖上传头像至七牛云
		String key = qiniuUserAvatarPrefix + fileName + originName.substring(originName.lastIndexOf("."));
		byte[] uploadBytes = null;
		try {
			uploadBytes = file.getBytes();
		} catch (IOException e) {
			throw new FileUploadException(ResultCode.FILE_UPLOAD_FAIL,"读取文件字节失败");
		}
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		long expireSeconds = 3600;
		String upToken = auth.uploadToken(qiniuImgBucket, key, expireSeconds, new StringMap().put("insertOnly",0));
		try {
			System.out.println(key);
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
	
	
}
