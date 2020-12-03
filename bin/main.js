#!/usr/bin/env node

const options = require('../lib/options');
const palette = require("../lib/palette");
const fs = require('fs');
const pjson = require('../package.json');
const jimp = require("jimp");

const IMG_WIDTH = 32;
const IMG_HEIGHT = 24;
const ATTR_OFFSET = 0x1800;

if (options.get('version')) {
    showVersion();
    process.exit(0);
}

if (options.get('help') || 1 !== options.getInput().length) {
    showUsage();
    process.exit(0);
}

const outFile = options.get('output-file')
const inFile = options.getInput()[0];

jimp.read(inFile, (err, img) => {
    if (err) throw err;
    let outBuf = Buffer.alloc(ATTR_OFFSET + IMG_HEIGHT * IMG_WIDTH);

    // fill image with checker pattern
    for (let y = 0; y < IMG_HEIGHT * 8; y++) {
        for (let x = 0; x < IMG_WIDTH; x++) {
            outBuf[y * IMG_WIDTH + x] = ((y >> 3) % 2) === 0 ? 0xaa : 0x55
        }
    }

    // process attributes
    img
        .resize(IMG_WIDTH, IMG_HEIGHT)
        .scan(0, 0, img.bitmap.width, img.bitmap.height, (x, y, idx) => {
            outBuf[ATTR_OFFSET + y * IMG_WIDTH + x] =
                palette.getAttr(img.bitmap.data[idx], img.bitmap.data[idx + 1], img.bitmap.data[idx + 2]);
        });

    fs.writeFileSync(outFile, outBuf);
});

function showVersion () {
    console.log(`${pjson.name} ${pjson.version}`);
}

function showDescription () {
    console.log(`${pjson.description}`);
}

function showUsage () {
    showVersion();
    showDescription();
    console.log(`Usage: ${pjson.name} [options] <image>`);
    options.info();
}
