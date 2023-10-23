import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ManifestService } from './manifest.service';
import { Manifest } from '@viz-init/types';

@Controller('manifest')
export class ManifestController {
  constructor(private readonly manifestService: ManifestService) {
    return;
  }

  @Get()
  async getAllManifest() {
    return await this.manifestService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.manifestService.get(id);
  }

  @Post()
  async create(@Body() m: Omit<Manifest, 'id'>) {
    return await this.manifestService.create(m);
  }

  @Patch()
  async update(@Body() m: Manifest) {
    return await this.manifestService.update(m);
  }

  @Delete()
  async delete(@Body() m: Manifest) {
    return await this.manifestService.delete(m);
  }
}
