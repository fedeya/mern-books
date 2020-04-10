import multer from 'multer';
import path from 'path';
import * as uuid from 'uuid';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if(file.fieldname === 'avatar') {
      cb(null, 'images/users');
    }

    if(file.fieldname === 'front') {
      cb(null, 'images/books');
    }
  },
  filename(req, file, cb) {
    cb(null, uuid.v4() + path.extname(file.originalname));
  }
});

export default multer({ storage });