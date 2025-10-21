import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);

    const oldFilename = path.join(dirname, 'files', 'wrongFilename.txt');
    const newFileName = path.join(dirname, 'files', 'properFilename.md');

    return new Promise((resolve, reject) => {
        fs.rename(oldFilename, newFileName, (renameErr) => {
            if (renameErr) {
                reject(new Error('FS operation failed'));
            } else {
                resolve();
            }
        })
    });
};

await rename();
