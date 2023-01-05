import { ILocalStorage } from '../../../domain/usecases/local-storage';

class RemoteLocalStorage implements ILocalStorage {
    constructor(private keyStorage: string) {}

    setLocalStorage(data: any): void {
        localStorage.setItem(this.keyStorage, JSON.stringify(data));
    }

    getLocalStorage(): any {
        const storage = localStorage.getItem(this.keyStorage);
        return storage ? JSON.parse(storage) : [];
    }

    removeLocalStorage(data: any): any {
        let storage = localStorage.getItem(this.keyStorage);

        if (storage) {
            storage = JSON.parse(storage).filter(
                (item: any) => item.id !== data,
            );
            this.setLocalStorage(storage);
        }

        return storage;
    }
}

export { RemoteLocalStorage };
