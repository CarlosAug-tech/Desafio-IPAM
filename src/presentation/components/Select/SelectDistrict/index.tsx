import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from '..';
import { ILoadDistricts } from '../../../../domain/usecases/load-districts';
import {
    addDistrict,
    clearDistricts,
    listDistricts,
} from '../../../../infra/store/modules/Districts';

interface ISelectDistrictProps {
    loadDistricts: ILoadDistricts;
}

function SelectDistrict({ loadDistricts }: ISelectDistrictProps) {
    const onlyState = useSelector((state: any) => state.state.onlyState);

    const city = useSelector((state: any) => state.city.city);

    const districts = useSelector((state: any) => state.district.districts);
    const district = useSelector((state: any) => state.district.district);

    const dispatch = useDispatch();

    const handleLoadDistricts = useCallback(async () => {
        if (Object.keys(city).length !== 0) {
            const response = await loadDistricts.getDistricts(city.id);

            dispatch(listDistricts(response));
        }
    }, [city]);

    useEffect(() => {
        if (city) {
            handleLoadDistricts();
        }
    }, [city]);

    const handleSelectDistrict = useCallback((district: any) => {
        dispatch(addDistrict(district));
    }, []);

    useEffect(() => {
        if (!city) {
            dispatch(clearDistricts());
        }
    }, [city, onlyState]);

    return (
        <Select
            effectVisible
            isVisible={city && !!city.id}
            data={districts}
            defaultSelect=""
            defaultSelectText="Selecione um distrito"
            dispatchSelect={handleSelectDistrict}
            option={district && district.id}
        />
    );
}

export { SelectDistrict };
