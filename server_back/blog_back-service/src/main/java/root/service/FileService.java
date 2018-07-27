package root.service;

import java.io.File;
import java.io.IOException;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.collect.Lists;
import com.google.common.io.Files;

import root.beans.ImgNode;
import root.util.TimeUtil;

@Service
public class FileService {

	@Value("${artimgPath}")
	private String artimgPath;
	@Value("${artimgPrfix}")
	private String artimgPrfix;
	
	public List<String> getImgPaths(List<MultipartFile> formdata) {
		// 遍历文件进行保存
		List<String> paths = Lists.newArrayList();
		formdata.forEach(file -> {
			File localFile = null;
			if (!file.isEmpty()) {
				try {
					localFile = saveToLocal(file);
					// 12312312312_img.jpg
					String path = 
							StringUtils.substringAfterLast(localFile.getAbsolutePath(), artimgPath.replaceAll("/", "\\\\"));
					paths.add(path.replace("\\", "/"));
				}catch(IOException e) {
					throw new IllegalArgumentException(e);
				}
			}
		});
		return paths;
	}
	
	private File saveToLocal(MultipartFile file) throws IOException{
		// D:/blog/upload/artImg/2018/7/
		// 12312312312_img.jpg
		File newFile = new File(artimgPath + TimeUtil.nowYear() + "/" + TimeUtil.nowMonth() + "/"
					+ Instant.now().getEpochSecond()+"_"+file.getOriginalFilename());
		if(!newFile.exists()) {
			newFile.getParentFile().mkdirs();
			newFile.createNewFile();
		}
		Files.write(file.getBytes(), newFile);
		return newFile;
	}

	
	public static void main(String[] args) {
		String sublast = StringUtils.substringAfterLast("D:\\blog\\upload\\artImg\\2018\\7\\123.jpg", 
				"D:/blog/upload/artImg/".replaceAll("/", "\\\\"));
		System.out.println(sublast.replace("\\", "/")); // 2018/7/123.jpg
		
		
	}

	public List<String> addPrefix(List<String> pathList) {
		List<String> httpPaths = pathList.stream().map(path -> 
			artimgPrfix + path
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
}
