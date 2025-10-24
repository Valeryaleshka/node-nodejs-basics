import worker from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const result = nthFibonacci(worker.workerData);

        worker.parentPort.postMessage({
            status: 'resolved',
            data: result
        });
    } catch (error) {
        worker.parentPort.postMessage({
            status: 'error',
            data: null
        });
    }
};

sendResult();
