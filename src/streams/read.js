import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dirname, 'files', 'fileToRead.txt');
const readStream = fs.createReadStream(src);

const read = async () => {
    readStream.pipe(process.stdout);
}

await read();
