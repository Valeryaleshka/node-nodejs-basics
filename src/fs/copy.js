import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const src = path.join(dirname, 'files');
const dist = path.join(dirname, 'files_copy');

const copy = async () => {

    return new Promise((resolve, reject) => {
        fs.cp(
            src,
            dist,
            { errorOnExist: true, force: false, recursive: true },
            (cpErr) => {
               if (cpErr) {
                   reject(new Error('FS operation failed'));
               }
               resolve();
        });
    });

};

await copy();