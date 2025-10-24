import path from "path";
import { createHash } from "crypto";
import {fileURLToPath} from "url";
import fs from "fs";

const calculateHash = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url));
    const src = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');

    fs.readFile(src, (err, data) => {
        if(err){
            console.log(err);
        }

        const hash = createHash('sha256').update(data).digest('hex');
        console.log(hash);
    })
};

await calculateHash();
