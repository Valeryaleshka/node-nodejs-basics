import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));

    const src = path.join(dirname, 'files');
    const dest = path.join(dirname, 'files_copy');

    return new Promise((resolve, reject) => {
        fs.cp(
            src,
            dest,
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