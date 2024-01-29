import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'script.js');

    const childProcess = spawn('node', [filePath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3', 'arg4']);
