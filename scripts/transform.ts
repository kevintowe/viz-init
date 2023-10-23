#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { plainToClass } from 'class-transformer';

import { Manifest } from '../libs/types/src/index';  // orginally tried importing from @viz-init/types but that wasn't working

const manifestDir = './libs/manifest/src/assets';
const outputFile = './libs/manifest/src/lib/manifest.ts';

// TODO: log out metrics
// function execution duration
// how many files were successfully and unsuccessful ect.

const generateAll = async () => {
    const files = fs.readdirSync(manifestDir);
    const allManifests: Manifest[] = [];

    for (const file of files) {
        console.log(file);
        if (path.extname(file) === '.json') {
            const rawContent = fs.readFileSync(path.join(manifestDir, file), 'utf-8');
            const plainManifest = JSON.parse(rawContent);

            // Transform the plain object to an instance of the Manifest class
            const manifest = plainToClass(Manifest, plainManifest);
            console.log(manifest)
            // Validate the instance
            // const errors = await validate(manifest);
            // if (errors.length > 0) {
            //     throw new Error(`Invalid manifest in file ${file}: ${JSON.stringify(errors)}`);
            // }

            allManifests.push(manifest);
        }
    }

    const outputContent = `import { Manifest } from '@viz-init/types';\n\nexport const manifests: Manifest[] = ${JSON.stringify(allManifests, null, 4)};\n`;
    fs.writeFileSync(outputFile, outputContent);
};

generateAll();
