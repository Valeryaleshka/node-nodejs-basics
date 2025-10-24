import fs from 'fs';
import zlib from 'zlib';
import path from "path";
import {fileURLToPath} from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const sourcePath = path.join(dirname, 'files', 'archive.gz');
const destinationPath = path.join(dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    if(!fs.existsSync(sourcePath)){
        console.log('File not found');
        return;
    }

    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);
    const gunzip = zlib.createUnzip();

    destination.on('error', (error) => {
        console.error('Error writing decompressed file:', error);
    });

    destination.on('finish', () => {
        console.log('File successfully decompressed to fileToCompress.txt');
    });

    source
        .pipe(gunzip)
        .pipe(destination);
};

await decompress();
