import { Injectable } from '@nestjs/common';
import { Manifest } from '@viz-init/types';

@Injectable()
export class ManifestService {
  constructor() {
    return;
  }

  async getAll() {
    return [] as Manifest[];
  }

  async get(id: string) {
    return {} as Manifest;
  }

  async create(m: Omit<Manifest, 'id'>) {
    return;
  }

  async update(m: Manifest) {
    return;
  }

  async delete(m: Manifest) {return;}
}
