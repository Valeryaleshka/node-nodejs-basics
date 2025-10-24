import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dirname, 'files');

const list = async () => {
  return new Promise((resolve, reject) => {

      fs.readdir(src, (err, files) => {
          if (err) {
              reject(new Error('FS operation failed'));
          }
          console.log('Files in directory:', files);
          resolve();
      });
  })
};

await list();
