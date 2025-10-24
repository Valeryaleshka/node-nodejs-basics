import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {

    const childProcess = spawn('node', [filePath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] // Use 'pipe' for stdin/stdout, 'inherit' for stderr
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });

    childProcess.on('error', (error) => {
        console.error('Child process error:', error);
    });

    return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess( 'ls');