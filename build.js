const fs = require("fs");

// 复制文件的函数
function copyFile(sourceFilePath, destinationFilePath) {
  // 创建读取源文件的流
  const readStream = fs.createReadStream(sourceFilePath);

  // 创建写入目标文件的流
  const writeStream = fs.createWriteStream(destinationFilePath);

  // 处理错误
  readStream.on("error", (error) => {
    console.error(`Error while reading file: ${error}`);
  });

  writeStream.on("error", (error) => {
    console.error(`Error while writing file: ${error}`);
  });

  // 读取完成时关闭流
  readStream.on("end", () => {
    console.log(`File copied successfully`);
    writeStream.end();
  });

  // 将读取流的数据写入到写入流中
  readStream.pipe(writeStream);
}

// 指定源文件路径和目标文件路径
// const sourceFilePath = "source_file.txt";
// const destinationFilePath = "destination_file.txt";

// 调用复制文件的函数
copyFile("./dist/index.html", "./dist/404.html");
