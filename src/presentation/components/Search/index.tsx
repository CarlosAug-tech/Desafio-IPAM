import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Input } from '../Input';

import { Container } from './styles';

interface ISearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<any>>;
}

function Search({ search, setSearch }: ISearchProps) {
    return (
        <Container>
            <Input
                type="text"
                placeholder="Busca por estado, município, distrito, região-imediata/intermediária.."
                icon={FaSearch}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </Container>
    );
}

export { Search };
