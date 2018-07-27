import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.file.Paths;
import java.time.Instant;

import org.apache.commons.io.FileUtils;

import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.processing.OperationManager;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.storage.model.FileInfo;
import com.qiniu.storage.persistent.FileRecorder;
import com.qiniu.util.Auth;
import com.qiniu.util.StringUtils;
import com.qiniu.util.UrlSafeBase64;

import root.util.TimeUtil;

public class QiNiuTest {

	
	public static void main(String[] args) {
		list();
	}
		
	
	
	
	public static void updateContent() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "your access key";
		String secretKey = "your secret key";
		String bucket = "your bucket name";
		String key = "your file key";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.prefetch(bucket, key);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明更新失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}
	
	public static void tobucket() {
		//构造一个带指定Zone对象的配置类
		/*Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "your access key";
		String secretKey = "your secret key";
		String bucket = "your bucket name";
		String key = "your file key";
		String remoteSrcUrl = "http://devtools.qiniu.com/qiniu.png";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		//抓取网络资源到空间
		try {
		    FetchRet fetchRet = bucketManager.fetch(remoteSrcUrl, bucket, key);
		    System.out.println(fetchRet.hash);
		    System.out.println(fetchRet.key);
		    System.out.println(fetchRet.mimeType);
		    System.out.println(fetchRet.fsize);
		} catch (QiniuException ex) {
		    System.err.println(ex.response.toString());
		}*/
	}
	
	public static void list() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-artimg";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		//文件名前缀
		String prefix = "";
		//每次迭代的长度限制，最大1000，推荐值 1000
		int limit = 1000;
		//指定目录分隔符，列出所有公共前缀（模拟列出目录效果）。缺省值为空字符串
		String delimiter = "";
		//列举空间文件列表
		BucketManager.FileListIterator fileListIterator = bucketManager.createFileListIterator(bucket, prefix, limit, delimiter);
		while (fileListIterator.hasNext()) {
		    //处理获取的file list结果
		    FileInfo[] items = fileListIterator.next();
		    for (FileInfo item : items) {
		        System.out.println(item.key);
		        System.out.println(item.hash);
		        System.out.println(item.fsize);
		        System.out.println(item.mimeType);
		        System.out.println(item.putTime);
		        System.out.println(item.endUser);
		    }
		}
	}
	
	
	public static void setTime() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone2());
		//...其他参数参考类注释
		String accessKey = "access key";
		String secretKey = "secret key";
		String bucket = "bucket name";
		String key = "file key";
		//过期天数，该文件10天后删除
		int days = 10;
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
	/*	try {
		    bucketManager.delete(bucket, key, days);
		} catch (QiniuException ex) {
		    System.err.println(ex.response.toString());
		}*/
	}
	
	
	public static void del() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "your access key";
		String secretKey = "your secret key";
		String bucket = "your bucket name";
		String key = "your file key";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.delete(bucket, key);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明删除失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}
	
	
	public static void copy() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone2());
		//...其他参数参考类注释
		String accessKey = "your access key";
		String secretKey = "your secret key";
		String fromBucket = "from bucket name";
		String fromKey = "from key";
		String toBucket = "to bucket name";
		String toKey = "to key";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.copy(fromBucket, fromKey, toBucket, toKey);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明复制失败
		    System.err.println(ex.code());
		}
	}
	
	
	public static void move() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "your access key";
		String secretKey = "your secret key";
		String fromBucket = "from bucket name";
		String fromKey = "from key";
		String toBucket = "to bucket name";
		String toKey = "to key";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    bucketManager.move(fromBucket, fromKey, toBucket, toKey);
		} catch (QiniuException ex) {
		    //如果遇到异常，说明移动失败
		    System.err.println(ex.code());
		    System.err.println(ex.response.toString());
		}
	}
	
	public static void updateFileType() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-artimg";
		String key = "upload/artimg/2018/7/1532668218_bg4.jpg";
		String newMimeType = "image/png";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		//修改文件类型
		try {
		    bucketManager.changeMime(bucket, key, newMimeType);
		} catch (QiniuException ex) {
		    System.out.println(ex.response.toString());
		}
	}
	
	public static void getInfo() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone0());
		//...其他参数参考类注释
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-artimg";
		String key = "upload/artimg/2018/7/1532668218_bg4.jpg";
		Auth auth = Auth.create(accessKey, secretKey);
		BucketManager bucketManager = new BucketManager(auth, cfg);
		try {
		    FileInfo fileInfo = bucketManager.stat(bucket, key);
		    System.out.println(fileInfo.hash);
		    System.out.println(fileInfo.fsize);
		    System.out.println(fileInfo.mimeType);
		    System.out.println(fileInfo.putTime);
		} catch (QiniuException ex) {
		    System.err.println(ex.response.toString());
		}
	}
	
	
	public static void load() {
		String fileName = "upload/artimg/2018/7/1532668218_bg4.jpg";
		String domainOfBucket = "http://pciaxxodf.bkt.clouddn.com";
		String encodedFileName = null;
		try {
			encodedFileName = URLEncoder.encode(fileName, "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		String finalUrl = String.format("%s/%s", domainOfBucket, encodedFileName);
		System.out.println(finalUrl);
		
	}
	
	public static void and () {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone2());
		//...其他参数参考类注释
		//...生成上传凭证，然后准备上传
		//...生成上传凭证，然后准备上传
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-artimg";
		//默认不指定key的情况下，以文件内容的hash值作为文件名
		String localFilePath = "D:\\blog\\upload\\artImg\\1532572200_bg1.jpg";
		String key = 
				"upload/artimg/" +
				TimeUtil.nowYear() + "/" + TimeUtil.nowMonth() + "/" 
				+ Instant.now().getEpochSecond() + "_" + "bg4.jpg";
		Auth auth = Auth.create(accessKey, secretKey);
		String upToken = auth.uploadToken(bucket);
		String localTempDir = Paths.get(System.getenv("java.io.tmpdir"), bucket).toString();
		try {
		    //设置断点续传文件进度保存目录
		    FileRecorder fileRecorder = new FileRecorder(localTempDir);
		    UploadManager uploadManager = new UploadManager(cfg, fileRecorder);
		    try {
		        Response response = uploadManager.put(localFilePath, key, upToken);
		        //解析上传成功的结果
		        DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		        System.out.println(putRet.key);
		        System.out.println(putRet.hash);
		    } catch (QiniuException ex) {
		        Response r = ex.response;
		        System.err.println(r.toString());
		        try {
		            System.err.println(r.bodyString());
		        } catch (QiniuException ex2) {
		            //ignore
		        }
		    }
		} catch (IOException ex) {
		    ex.printStackTrace();
		}
	}
	
	
	public static void uploadByChar() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone2());
		//...其他参数参考类注释
		UploadManager uploadManager = new UploadManager(cfg);
		//...生成上传凭证，然后准备上传
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-img";
		//默认不指定key的情况下，以文件内容的hash值作为文件名
		String key = 
				"upload/artimg/" +
				TimeUtil.nowYear() + "/" + TimeUtil.nowMonth() + "/" 
				+ Instant.now().getEpochSecond() + "_" + "bg4.jpg";
		byte[] uploadBytes = null;
		try {
			uploadBytes = FileUtils.readFileToByteArray(new File("D:/blog/upload/artImg/1532572200_bg1.jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		Auth auth = Auth.create(accessKey, secretKey);
		String upToken = auth.uploadToken(bucket);
		try {
		    Response response = uploadManager.put(uploadBytes, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		    System.out.println(putRet.key);
		    System.out.println(putRet.hash);
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		        //ignore
		    }
		}
	}
	
	
	
	public static void upload() {
		//构造一个带指定Zone对象的配置类
		Configuration cfg = new Configuration(Zone.zone2());
		//...其他参数参考类注释
		UploadManager uploadManager = new UploadManager(cfg);
		//...生成上传凭证，然后准备上传
		String accessKey = "XwXCUlhN-RunaX8r77PBuKZCS7iCoh9pXnz73pT6";
		String secretKey = "uBQYSw1xV9N4hGFouo_bIhQDQFQX1JTw1EmGMxvW";
		String bucket = "blog-artimg";
		//如果是Windows情况下，格式是 D:\\qiniu\\test.png
		// String localFilePath = "/home/qiniu/test.png";
		String localFilePath = "D:\\blog\\upload\\artImg\\1532572200_bg1.jpg";
		//默认不指定key的情况下，以文件内容的hash值作为文件名
		String key = 
		"upload/artimg/" +
		TimeUtil.nowYear() + "/" + TimeUtil.nowMonth() + "/" 
		+ Instant.now().getEpochSecond() + "_" + "bg1.jpg";
		Auth auth = Auth.create(accessKey, secretKey);
		String upToken = auth.uploadToken(bucket);
		try {
		    Response response = uploadManager.put(localFilePath, key, upToken);
		    //解析上传成功的结果
		    DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
		    System.out.println(putRet.key);
		    System.out.println(putRet.hash);
		} catch (QiniuException ex) {
		    Response r = ex.response;
		    System.err.println(r.toString());
		    try {
		        System.err.println(r.bodyString());
		    } catch (QiniuException ex2) {
		        //ignore
		    }
		}
	}
}	
