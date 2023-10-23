import { Module } from '@nestjs/common';
import * as azdev from 'azure-devops-node-api';

import { AdoService } from './ado.service';
import { AdoController } from './ado.controller';

const orgUrl = 'https://dev.azure.com/vizientinc';
const token: string | undefined = process.env['AZURE_PERSONAL_ACCESS_TOKEN'];
if (token === undefined) {
  console.log(
    'You must provide an AZURE_PERSONAL_ACCESS_TOKEN in the process environmnet.'
  );
  process.exit(1);
}
const authHandler = azdev.getPersonalAccessTokenHandler(token);
const connection = new azdev.WebApi(orgUrl, authHandler);

@Module({
  providers: [
    {
      provide: 'ADO_CORE',
      useFactory: async () => await connection.getCoreApi(),
    },
    {
      provide: 'ADO_GIT',
      useFactory: async () => await connection.getGitApi(),
    },
    AdoService,
  ],
  controllers: [AdoController],
})
export class AdoModule {}
