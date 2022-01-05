import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {GetSignedURLInputHandler} from './get-signed-url';

@Controller()
export class AppController {
  constructor(private readonly getSignedURLInputHandler: GetSignedURLInputHandler) {}

  @Get('/')
  index() {
    return 'Hello from nest'
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  sign(@UploadedFile() file: Express.Multer.File) {
    return this.getSignedURLInputHandler.handle({
      name: file.filename,
      size: file.size,
      mimeType: file.mimetype
    })
  }
}
