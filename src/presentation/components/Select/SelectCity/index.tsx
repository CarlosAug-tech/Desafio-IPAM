import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from '..';
import { IloadCities } from '../../../../domain/usecases/load-cities';
import {
    addCity,
    clearCities,
    clearCity,
    listCities,
} from '../../../../infra/store/modules/Cities';
import { clearDistricts } from '../../../../infra/store/modules/Districts';

interface ISelectCityProps {
    loadCities: IloadCities;
}

function SelectCity({ loadCities }: ISelectCityProps) {
    const onlyState = useSelector((state: any) => state.state.onlyState);

    const cities = useSelector((state: any) => state.city.cities);
    const city = useSelector((state: any) => state.city.city);

    const dispatch = useDispatch();

    const handleLoadCities = useCallback(async () => {
        if (Object.keys(onlyState).length !== 0) {
            const response = await loadCities.getCities(onlyState.id);

            dispatch(listCities(response));
        }
    }, [onlyState]);

    useEffect(() => {
        if (onlyState) {
            handleLoadCities();
            dispatch(clearDistricts());
            dispatch(clearCity());
        }

        if (!onlyState) {
            dispatch(clearCities());
            dispatch(clearDistricts());
        }
    }, [onlyState]);

    const handleSelectCity = useCallback((city: any) => {
        dispatch(addCity(city));
    }, []);

    return (
        <Select
            effectVisible
            isVisible={onlyState && !!onlyState.id}
            data={cities}
            defaultSelect=""
            defaultSelectText="Selecione um município"
            dispatchSelect={handleSelectCity}
            option={city && city.id}
        />
    );
}

export { SelectCity };
