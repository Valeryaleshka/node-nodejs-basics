import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    return new Promise((resolve, reject) => {

        const dirname = path.dirname(fileURLToPath(import.meta.url));

        const src = path.join(dirname, 'files', 'fileToRead.txt');

        fs.readFile(src, {
            encoding: 'utf-8'
        }, (err,  data) => {
            if (err) {
                reject(new Error('FS operation failed'));
            }
            console.log('File content:', data);
            resolve(data);
        });
    })
};

await read();