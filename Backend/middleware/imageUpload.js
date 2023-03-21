const fs = require('fs');

module.exports = async function (req, res, next) {
  try {
    if(!req.files || Object.values(req.files).flat().length === 0){
      return res.status(400).json({ message: "No files selected" });
    }
    let files = Object.values(req.files).flat();
    files.forEach((file) => {
      if(
        files.mimettype !== 'image/jpeg' &&
        files.mimettype !== 'image/png' &&
        files.mimettype !== 'image/gif' &&
        files.mimettype !== 'image/webp'
        ){
        removeTmp(file.tempFilePath)
        return res.status(400).json({ message: "Unsupported format." });
      }
      if(file.size > 1024 * 1024 * 5) {
        removeTmp(file.tempFilePath)
        return res.status(400).json({ message: "File size is too large." });
      }
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};