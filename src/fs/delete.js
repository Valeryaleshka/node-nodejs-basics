import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(dirname, 'files', 'fileToRemove.txt');

const remove = async () => {

    return new Promise((resolve, reject) => {
        fs.rm(filePath, (delErr) => {
            if(delErr){
                reject(new Error('FS operation failed'));
            }

            resolve();
        })
    })
};

await remove();
