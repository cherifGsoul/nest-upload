import { FakeStorageService, GetSignedURLInputHandler } from './get-signed-url';

/**
 * This is custom service container to expose only public services factory
 */
export class ServiceContainer {
  constructor(readonly storageServiceUrl: string) {}

  get signedUrlHandler() {
    return new GetSignedURLInputHandler(this.storageService());
  }

  private storageService() {
    return new FakeStorageService(this.storageServiceUrl);
  }
}
