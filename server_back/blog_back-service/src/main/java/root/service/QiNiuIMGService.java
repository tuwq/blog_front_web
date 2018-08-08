package root.service;

import java.io.IOException;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.collect.Lists;
import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;

import root.beans.ImgNode;
import root.beans.ImgURIResult;
import root.util.TimeUtil;

@Service
public class QiNiuIMGService {

	@Value("${qiniuAcKey}")
	private String qiniuAcKey;
	@Value("${qiniuSeKey}")
	private String qiniuSeKey;
	@Value("${qiniuImgServer}")
	private String qiniuImgServer;
	@Value("${qiniuImgBucket}")
	private String qiniuImgBucket;
	@Value("${qiniuArtImgPrefix}")
	private String qiniuArtImgPrefix;
	@Value("${qiniuConfigImgPrefix}")
	private String qiniuConfigImgPrefix;
	private Configuration cfg = new Configuration(Zone.zone2());
	private UploadManager uploadManager = new UploadManager(cfg);
	
	
	public List<String> getImgPaths(List<MultipartFile> formdata) {
		// 上传图片至七牛，得到upload/artimg/2018/7/8856_123.jpg地址
		List<String> paths = Lists.newArrayList();
		formdata.forEach(file -> {
			String path = "";
			if (!file.isEmpty()) {
				path = uploadArtImgToQiNiu(file);
				paths.add(path);
			}
		});
		return paths;
	}

	private String uploadArtImgToQiNiu(MultipartFile file) {
		// upload/artimg/2018/7/286_img.jpg
		String key = qiniuArtImgPrefix
				+ TimeUtil.nowYear() + "/" + TimeUtil.nowMonth() + "/"
				+ Instant.now().getEpochSecond() + "_" + file.getOriginalFilename();
		byte[] uploadBytes = null;
		try {
			uploadBytes = file.getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		String upToken = auth.uploadToken(qiniuImgBucket);
		try {
		    Response response = uploadManager.put(uploadBytes, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		    // 2018/7/27/12312_img.jpg
		    return StringUtils.substringAfterLast(putRet.key, qiniuArtImgPrefix);
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		 
		    }
		}
		return "";
	}	
	
	public List<String> addPrefix(List<String> pathList) {
		List<String> httpPaths = pathList.stream().map(path -> 
		    // http://pcij2jrr4.bkt.clouddn.com/upload/artimg/2018/7/286_img.jpg
			qiniuImgServer + qiniuArtImgPrefix + path
		).collect(Collectors.toList());
		return httpPaths;
	}
	
	public List<ImgNode> httpPathsToNodeList(List<String> httpPaths) {
		List<ImgNode> nodes = Lists.newArrayList(); 
		if (httpPaths.size() != 0 || !httpPaths.isEmpty()) {
			for (int i = 0;i< httpPaths.size();i++ ) {
				ImgNode node = ImgNode.builder().index(i).path(httpPaths.get(i)).build();
				nodes.add(node);
			}
		} 
		return nodes;
	}

	public void delIMG(String coverImg) {
		String key = qiniuArtImgPrefix + coverImg;		
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.delete(qiniuImgBucket, key);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明删除失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}
	
	public String uploadConfigImg(MultipartFile file) {
		// upload/config/286_img.jpg
		String key = qiniuConfigImgPrefix + file.getOriginalFilename();
		byte[] uploadBytes = null;
		try {
			uploadBytes = file.getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Auth auth = Auth.create(qiniuAcKey, qiniuSeKey);
		String upToken = auth.uploadToken(qiniuImgBucket);
		try {
		    Response response = uploadManager.put(uploadBytes, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		    return qiniuImgServer + putRet.key;
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		        //ignore
		    }
		}
		return "";
	}
}
