import {FakeStorageService, GetSignedURLInput, GetSignedURLInputHandler, SignedURL} from "./get-signed-url";

describe('App service', () => {
    it('should get a signed URL from the storage service for a given file metadata',  async () => {
        const input: GetSignedURLInput = {
            size: 400,
            name: 'bill',
            mimeType: 'image/png'
        }

        const handler = new GetSignedURLInputHandler(new FakeStorageService('my-storage.com'));
        const signedURL: SignedURL = await handler.handle(input)
        expect(signedURL.token).toBeDefined();
        expect(signedURL.url).toEqual('my-storage.com');
    })
})