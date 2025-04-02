import multer from "multer";

const storage = multer.memoryStorage();

const uploadFile = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size (10MB)
}).single("file");

export default uploadFile;
