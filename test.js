import fs from "fs";
import path from "path";

// 定义不需要打印的目录列表
const excludedDirectories = [
  "dist_electron",
  "dist",
  ".idea",
  ".vscode",
  "node_modules",
  ".git",
];

function generateDirectoryTree(rootDir) {
  const tree = {};

  function traverseDirectory(currentDir, currentNode) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        if (!excludedDirectories.includes(file)) {
          currentNode[file] = {};
          traverseDirectory(filePath, currentNode[file]);
        }
      } else {
        currentNode[file] = null;
      }
    });
  }

  traverseDirectory(rootDir, tree);

  return tree;
}

const currentDirectory = __dirname; // 获取当前文件所在的目录
const directoryTree = generateDirectoryTree(currentDirectory);

// 将目录树转换为JSON字符串
const directoryTreeJSON = JSON.stringify(directoryTree, null, 2);

// 将目录树保存到文件
fs.writeFileSync("filesTree.txt", directoryTreeJSON, "utf-8");
console.log("目录树已保存到 filesTree.txt 文件。");
