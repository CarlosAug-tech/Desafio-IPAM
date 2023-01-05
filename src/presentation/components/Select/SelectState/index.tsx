import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from '..';
import { ILoadStates } from '../../../../domain/usecases/load-states';
import { addState, listStates } from '../../../../infra/store/modules/States';

interface ISelectStateProps {
    loadStates: ILoadStates;
}

function SelectState({ loadStates }: ISelectStateProps) {
    const states = useSelector((state: any) => state.state.states);
    const onlyState = useSelector((state: any) => state.state.onlyState);

    const dispatch = useDispatch();

    const handleLoadStates = useCallback(async () => {
        const response = await loadStates.getStates();

        dispatch(
            listStates(response.sort((a, b) => a.nome.localeCompare(b.nome))),
        );
    }, []);

    useEffect(() => {
        handleLoadStates();
    }, []);

    const handleSelectState = useCallback(async (state: any) => {
        dispatch(addState(state));
    }, []);

    return (
        <Select
            data={states}
            defaultSelect=""
            defaultSelectText="Selecione um estado"
            dispatchSelect={handleSelectState}
            option={onlyState && onlyState.id}
        />
    );
}

export { SelectState };
