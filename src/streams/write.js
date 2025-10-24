import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dirname, 'files', 'fileToWrite.txt');
const writeStream = fs.createWriteStream(src);

const write = async () => {
  process.stdin.pipe(writeStream);
};

await write();
