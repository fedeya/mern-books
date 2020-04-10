import multer from 'multer';
import path from 'path';
import * as uuid from 'uuid';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if(file.fieldname === 'avatar') {
      cb(null, 'uploads/images/users');
    }

    if(file.fieldname === 'file') {
      cb(null, 'uploads/files/')
    }

    if(file.fieldname === 'front') {
      cb(null, 'uploads/images/books');
    }
  },
  filename(req, file, cb) {
    cb(null, uuid.v4() + path.extname(file.originalname));
  }
});

export default multer({ storage });