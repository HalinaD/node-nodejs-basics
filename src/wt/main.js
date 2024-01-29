import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'worker.js');

    const numWorkers = os.cpus().length;
    const workerPromises = [];
  
    for (let i = 0; i < numWorkers; i++) {
      const worker = new Worker(filePath, { workerData: 10 + i });
  
      const workerPromise = new Promise((resolve) => {
        worker.on('message', (result) => {
          resolve(result);
        });
      });
  
      workerPromises.push(workerPromise);
    }
  
    const results = await Promise.all(workerPromises);
    console.log(results);
};

await performCalculations();