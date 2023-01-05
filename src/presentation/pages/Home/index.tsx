import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IloadCities } from '../../../domain/usecases/load-cities';
import { ILoadDistricts } from '../../../domain/usecases/load-districts';
import { ILoadStates } from '../../../domain/usecases/load-states';
import { ILocalStorage } from '../../../domain/usecases/local-storage';
import { addToast } from '../../../infra/store/modules/Toast';
import { Card } from '../../components/Card';

import { SelectCity } from '../../components/Select/SelectCity';
import { SelectDistrict } from '../../components/Select/SelectDistrict';
import { SelectState } from '../../components/Select/SelectState';

import { Container, Content, Title } from './styles';

interface IHomeProps {
    loadStates: ILoadStates;
    loadCities: IloadCities;
    loadDistricts: ILoadDistricts;
    localStorage: ILocalStorage;
}

function Home({
    loadStates,
    loadCities,
    loadDistricts,
    localStorage,
}: IHomeProps) {
    const dispatch = useDispatch();
    const district = useSelector((state: any) => state.district.district);

    const handleAddDistrictInList = useCallback((data: any) => {
        const storage = localStorage.getLocalStorage();

        const findByIdDistrict = storage.find(
            (item: any) => item.id === data.id,
        );

        if (findByIdDistrict) {
            dispatch(
                addToast({
                    type: 'error',
                    title: 'Este distrito já foi salvo!',
                }),
            );
            return;
        }

        const addNewDistrictInStorage = [...storage, data];

        localStorage.setLocalStorage(addNewDistrictInStorage);
        dispatch(
            addToast({
                type: 'success',
                title: 'Distrito salvo com sucesso!',
            }),
        );
    }, []);

    return (
        <Container>
            <Title>Selecione um distrito</Title>
            <Content>
                <SelectState loadStates={loadStates} />
                <SelectCity loadCities={loadCities} />
                <SelectDistrict loadDistricts={loadDistricts} />
                {district && district.id && (
                    <Card data={district} handleAdd={handleAddDistrictInList} />
                )}
            </Content>
        </Container>
    );
}

export { Home };
