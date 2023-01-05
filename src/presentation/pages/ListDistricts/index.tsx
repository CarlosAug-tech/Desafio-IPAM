import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ILocalStorage } from '../../../domain/usecases/local-storage';
import { addToast } from '../../../infra/store/modules/Toast';
import { ListMiniCards } from '../../components/ListMiniCards';
import { Loading } from '../../components/Loading';

import { Container, ContainerError } from './styles';

interface IListDistrictsProps {
    localStorage: ILocalStorage;
}

function ListDistricts({ localStorage }: IListDistrictsProps) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [districtsInStorage, setDistrictsInStorage] = useState([]);

    const loadDistrictsInStorage = useCallback(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
            const storage = localStorage.getLocalStorage();
            setDistrictsInStorage(storage);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        loadDistrictsInStorage();
    }, []);

    const handleRemoveDistrict = useCallback((data: any) => {
        const storage = localStorage.removeLocalStorage(data);
        setDistrictsInStorage(storage);
        dispatch(
            addToast({
                type: 'success',
                title: 'Distrito removido com sucesso!',
            }),
        );
    }, []);

    useEffect(() => {
        loadDistrictsInStorage();
    }, [handleRemoveDistrict]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    {districtsInStorage.length !== 0 ? (
                        <ListMiniCards
                            data={districtsInStorage}
                            removeMiniCard={handleRemoveDistrict}
                            recordsPerPage={10}
                        />
                    ) : (
                        <ContainerError>
                            <strong>Não há nenhum distrito salvo!</strong>
                        </ContainerError>
                    )}
                </Container>
            )}
        </>
    );
}

export { ListDistricts };
