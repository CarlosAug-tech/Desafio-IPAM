import React, { useState, useEffect } from 'react';

import { Pagination } from '../Pagination';
import { Search } from '../Search';
import { MiniCard } from './MiniCard';

import { Container, ErrorContainer } from './styles';

interface IListMiniCardsProps {
    data: any[];
    removeMiniCard?: Function;
    recordsPerPage: number;
}

function ListMiniCards({
    data,
    removeMiniCard,
    recordsPerPage,
}: IListMiniCardsProps) {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [amountRecordsPerPage] = useState(
        recordsPerPage === 0 ? 10 : recordsPerPage,
    );

    const indexOfLastRecord = currentPage * amountRecordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - amountRecordsPerPage;

    const [records, setRecords] = useState<any[]>(
        data.slice(indexOfFirstRecord, indexOfLastRecord),
    );
    const [numberPages, setNumberPages] = useState(
        Math.ceil(data.length / recordsPerPage),
    );

    useEffect(() => {
        if (search) {
            const dataSearch = data.filter(
                (item) =>
                    item.nome.toLowerCase().includes(search.toLowerCase()) ||
                    item.municipio.nome
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.municipio.microrregiao.mesorregiao.UF.nome
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.municipio.microrregiao.nome
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.municipio.microrregiao.mesorregiao.nome
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.municipio['regiao-imediata'].nome
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.municipio['regiao-imediata'][
                        'regiao-intermediaria'
                    ].nome
                        .toLowerCase()
                        .includes(search.toLowerCase()),
            );
            setCurrentPage(1);
            setNumberPages(Math.ceil(dataSearch.length / recordsPerPage));
            setRecords(dataSearch.slice(indexOfFirstRecord, indexOfLastRecord));
        } else {
            setNumberPages(Math.ceil(data.length / recordsPerPage));
            setRecords(data.slice(indexOfFirstRecord, indexOfLastRecord));
        }
    }, [search, currentPage, numberPages, data]);

    return (
        <Container>
            <Search search={search} setSearch={setSearch} />
            {records && records.length > 0 ? (
                <>
                    {records.map((item) => (
                        <MiniCard
                            key={item.id}
                            data={item}
                            removeMiniCard={removeMiniCard && removeMiniCard}
                        />
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        numberPages={numberPages}
                    />
                </>
            ) : (
                <ErrorContainer>
                    <strong>Não foi encontrado nenhum registro</strong>
                </ErrorContainer>
            )}
        </Container>
    );
}

export { ListMiniCards };
