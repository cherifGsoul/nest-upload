import {v4} from 'uuid';

export interface GetSignedURLInput {
    name: string;
    size: number;
    mimeType: string;
}

export interface StorageService {
    signURLFor(name: string, size: number, mimeType: string): Promise<SignedURL>;
}

interface File {
    name: string;
    size: number;
    mimeType: string;
    token: string;
}

export interface SignedURL {
    url: string,
    token: string
}

export class FakeStorageService implements  StorageService {
    constructor(private url: string, private files: Map<string, File> = new Map()) {}

    async signURLFor(name: string, size: number, mimeType: string): Promise<SignedURL> {
        const token = v4();
        const file: File = { name,  size, mimeType, token}
        this.files.set(file.token, file);
        return {url: this.url, token }
    }
}

export class GetSignedURLInputHandler {
    constructor(private readonly  storageService: StorageService) {}

    handle(input: GetSignedURLInput): Promise<SignedURL> {
        return this.storageService.signURLFor(input.name, input.size, input.mimeType)
    }
}