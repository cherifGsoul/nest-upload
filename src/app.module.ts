import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {FakeStorageService, GetSignedURLInputHandler} from './get-signed-url';

const getSignedURLInputHandlerFactory = {
  provide: GetSignedURLInputHandler,
  useFactory: () => {
    return new GetSignedURLInputHandler(new FakeStorageService('my-storage.com'))
  }
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [getSignedURLInputHandlerFactory],
})
export class AppModule {}
