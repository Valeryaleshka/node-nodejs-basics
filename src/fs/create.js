import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async (context = 'I am fresh and young') => {

    const dirname = path.dirname(fileURLToPath(import.meta.url));

    const filePath = path.join(dirname, 'files', 'fresh.txt');

    return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (accessErr) => {
            if (accessErr) {
                fs.writeFile(filePath, context, (writeErr) => {
                    if (writeErr) {
                        reject(new Error('FS operation failed'));
                    } else {
                        resolve();
                    }
                });
            } else {
                reject(new Error('FS operation failed'));
            }
        });
    });
};


await create();
