const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({

  }),
  limits: {
    fileSize: 2 * 1024 + 1024
  },
  // Filtra somente arquivos válidos
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/png'
    ]
  }
}