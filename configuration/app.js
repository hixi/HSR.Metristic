var Path = require('path');


module.exports = {
	APP_PORT: process.env.APP_PORT || 8080,
	MAX_UPLOAD_SIZE: process.env.MAX_UPLOAD_SIZE || 5, // MB
	ARCHIVE_TMP_DIRECTORY: process.env.ARCHIVE_TMP_DIRECTORY || '/tmp/metristic/'
};
