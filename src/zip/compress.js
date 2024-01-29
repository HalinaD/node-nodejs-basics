import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToCompressed = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = 'archive.gz';

    const inputReadStream = fs.createReadStream(fileToCompressed);
    const compressedWriteStream = fs.createWriteStream(compressedFilePath);

    const compressStream = zlib.createGzip();
    inputReadStream.pipe(compressStream).pipe(compressedWriteStream);
};

await compress();