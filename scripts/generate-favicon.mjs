import { writeFile } from 'node:fs/promises';
import path from 'node:path';

async function main() {
    const projectRoot = path.resolve(process.cwd());
    const sourcePng = path.join(projectRoot, 'public', 'ChatReplyLogo.png');
    const outIco = path.join(projectRoot, 'public', 'favicon.ico');

    const sharp = (await import('sharp')).default;
    const toIco = (await import('to-ico')).default;

    const sizes = [16, 32, 48, 64, 128, 256];
    const pngBuffers = await Promise.all(
        sizes.map(async (size) => {
            return await sharp(sourcePng)
                .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
                .png()
                .toBuffer();
        })
    );

    const icoBuffer = await toIco(pngBuffers);
    await writeFile(outIco, icoBuffer);
    console.log('Generated favicon:', outIco);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});


