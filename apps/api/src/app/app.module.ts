import { Module } from '@nestjs/common';

import { AdoModule } from './ado';
import { ManifestModule } from './manifest';

@Module({
  imports: [AdoModule, ManifestModule],
  providers: [],
})
export class AppModule {}
