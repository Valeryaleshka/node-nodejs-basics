import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cpuCores = cpus().length;
    const startNumber = 10;

    const workers = Array.from({ length: cpuCores }, (_, index) => {
        const workerData = startNumber + index;

        return new Promise((resolve) => {
            const worker = new Worker(workerPath, {
                workerData
            });

            worker.on('message', (message) => {
                resolve({
                    status: message.status,
                    data: message.data
                });
            });

            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null
                });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({
                        status: 'error',
                        data: null
                    });
                }
            });
        });
    });

    const results = await Promise.all(workers);

    console.log(results);
};

await performCalculations();
