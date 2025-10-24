import fs  from 'fs';
import zlib from 'zlib';
import path from "path";
import {fileURLToPath} from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(dirname, 'files', 'fileToCompress.txt');
const compressPath = path.join(dirname, 'files', 'archive.gz');

const compress = async () =>{
    if(!fs.existsSync(filePath)){
        console.log('File not found');
        return;
    }

    const source = fs.createReadStream(filePath);
    const destination = fs.createWriteStream(compressPath);
    const gzip = zlib.createGzip();

    destination.on('error', (error) => {
        console.error('Error writing compressed file:', error);
    });

    destination.on('finish', () => {
        console.log(`File successfully compressed to ${compressPath}`);
    });

    source
        .pipe(gzip)
        .pipe(destination);
}

await compress();