import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataurl = (file) => {
  if (!file) {
    console.log("File is undefined!");
    throw new Error("File upload failed, req.file is undefined");
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataurl;
