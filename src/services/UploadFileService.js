const path = require("path");
const handleUploadSingleFileName = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const pathName = path.join(__dirname, `../public/images/${fileObject.name}`);
  let uploadPath = pathName;

  console.log("__dirname", __dirname);

  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: "link-image",
      error: null,
    };
  } catch (err) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const handleUploadMultipleFile = async (fileObject) => {
  console.log("fileObject", fileObject);
  try {
    const results = fileObject.map(async (file) => {
      const pathName = path.join(__dirname, `../public/images/${file.name}`);
      let uploadPath =  pathName;
      return await file.mv(uploadPath);
    });
    return results;
  } catch (err) {
    return {
      status: "failed",
    };
  }
};

module.exports = { handleUploadSingleFileName, handleUploadMultipleFile };
