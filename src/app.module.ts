import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GetSignedURLInputHandler } from './get-signed-url';
import { ServiceContainer } from './service-container';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: ServiceContainer,
      useFactory: () => new ServiceContainer('my-storage.com'),
    },
    {
      provide: GetSignedURLInputHandler,
      useFactory: (serviceContainer: ServiceContainer) =>
        serviceContainer.signedUrlHandler,
      inject: [ServiceContainer],
    },
  ],
})
export class AppModule {}
