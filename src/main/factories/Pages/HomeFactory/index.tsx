import React from 'react';
import { RemoteLoadCities } from '../../../../data/usecases/load-cities/remote-load-cities';
import { RemoteLoadDistricts } from '../../../../data/usecases/load-districts/remote-load-districts';
import { RemoteLoadStates } from '../../../../data/usecases/load-states/remote-load-states';
import { RemoteLocalStorage } from '../../../../data/usecases/local-storage/remote-local-storage';
import { AxiosGetClient } from '../../../../infra/http/Axios/axios-get-client';
import { Home } from '../../../../presentation/pages/Home';

function HomeFactory() {
    const axiosGetClient = new AxiosGetClient();
    const remoteLoadStates = new RemoteLoadStates(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        axiosGetClient,
    );
    const remoteLoadCities = new RemoteLoadCities(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        axiosGetClient,
    );
    const remoteLoadDistricts = new RemoteLoadDistricts(
        'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
        axiosGetClient,
    );
    const remoteLocalStorage = new RemoteLocalStorage('districitsListStorage');

    return (
        <Home
            loadStates={remoteLoadStates}
            loadCities={remoteLoadCities}
            loadDistricts={remoteLoadDistricts}
            localStorage={remoteLocalStorage}
        />
    );
}

export { HomeFactory };
