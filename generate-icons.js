const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, 'public', 'logo-white.webp');
const out512 = path.join(__dirname, 'public', 'app-icon-512.png');
const out192 = path.join(__dirname, 'public', 'app-icon-192.png');
const outApple = path.join(__dirname, 'public', 'apple-icon.png');

const BG_COLOR = '#111111';

async function generate() {
    try {
        // Create 512x512
        await sharp({
            create: {
                width: 512,
                height: 512,
                channels: 4,
                background: BG_COLOR
            }
        })
            .composite([
                {
                    input: await sharp(logoPath).resize(360, 360, { fit: 'inside' }).toBuffer(),
                    gravity: 'center'
                }
            ])
            .png()
            .toFile(out512);

        // Create 192x192
        await sharp({
            create: {
                width: 192,
                height: 192,
                channels: 4,
                background: BG_COLOR
            }
        })
            .composite([
                {
                    input: await sharp(logoPath).resize(130, 130, { fit: 'inside' }).toBuffer(),
                    gravity: 'center'
                }
            ])
            .png()
            .toFile(out192);

        // Create 180x180 (Apple)
        await sharp({
            create: {
                width: 180,
                height: 180,
                channels: 4,
                background: BG_COLOR
            }
        })
            .composite([
                {
                    input: await sharp(logoPath).resize(120, 120, { fit: 'inside' }).toBuffer(),
                    gravity: 'center'
                }
            ])
            .png()
            .toFile(outApple);

        console.log('Icons generated successfully.');
    } catch (e) {
        console.error('Error:', e);
    }
}

generate();
