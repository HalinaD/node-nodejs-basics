import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const decompressedFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFilePath = 'archive.gz';
    const decompressedWriteStream = fs.createWriteStream(decompressedFilePath);

    const decompressStream = zlib.createGunzip();
    fs.createReadStream(compressedFilePath).pipe(decompressStream).pipe(decompressedWriteStream);
};

await decompress();