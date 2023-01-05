import React from 'react';

import { RemoteLocalStorage } from '../../../../data/usecases/local-storage/remote-local-storage';
import { ListDistricts } from '../../../../presentation/pages/ListDistricts';

function ListDistrictsFactory() {
    const remoteLocalStorage = new RemoteLocalStorage('districitsListStorage');

    return <ListDistricts localStorage={remoteLocalStorage} />;
}

export { ListDistrictsFactory };
