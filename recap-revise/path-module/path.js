const path = require("path");

// joining paths
const fullPath = path.join("folder", "subfolder", "file.txt"); // creating and joining dummy path
const fullPath1 = path.join(__dirname, "public"); // serving 'public' folder from current directory.

false && console.log(fullPath1);
// Windows: folder\subfolder\file.txt
// Linux/macOS: folder/subfolder/file.txt

const absolutePath = path.resolve('abspath'); // provides current working directory
 console.log(absolutePath); // generate absolute path from current working directory

// extracting exact file name with extension.
const filename = path.basename(__filename); // __filename gives the full path of current filename and __dirname gives full path of current working directory.
const filename1 = path.basename("/folder/file.txt"); // gives file.txt
false && console.log(filename);

// extracting directory/folder name
const dirName = path.dirname("/folder/sub/file.txt"); //gives folder/sub
const dirName1 = path.dirname(__filename); // gives full path with only dirname
false && console.log(dirName1);

// finding extension name of a file
const extName = path.extname("/folder/subfolder/file.txt"); // .txt
const extName1 = path.extname(__filename); // path.js = .js
false && console.log(extName1);
