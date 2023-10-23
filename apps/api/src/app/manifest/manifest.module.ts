import { Module } from '@nestjs/common';

import { ManifestService } from './manifest.service';
import { ManifestController } from './manifest.controller';

@Module({ providers: [ManifestService], controllers: [ManifestController] })
export class ManifestModule {}
