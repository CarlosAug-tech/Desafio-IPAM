import React, { useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Button } from '../Button';

import { Container, ButtonPagination } from './styles';

interface IPaginationProps {
    numberPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

function Pagination({
    numberPages,
    currentPage,
    setCurrentPage,
}: IPaginationProps) {
    const pageNumbers = [...Array.from(Array(numberPages + 1).keys())].slice(1);

    const handleNextPage = useCallback(() => {
        if (currentPage !== numberPages) {
            setCurrentPage(currentPage + 1);
        }
    }, [currentPage]);

    const handlePreviousPage = useCallback(() => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }, [currentPage]);

    useEffect(() => {
        const findLastPage = pageNumbers.find((item) => item === currentPage);

        if (!findLastPage) {
            setCurrentPage(pageNumbers[pageNumbers.length - 1]);
        }
    }, [pageNumbers]);

    return (
        <Container>
            {currentPage !== 1 && (
                <Button onClick={handlePreviousPage}>
                    <FaChevronLeft size={12} />
                </Button>
            )}
            {pageNumbers.map((page) => (
                <ButtonPagination
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                >
                    {page}
                </ButtonPagination>
            ))}
            {currentPage !== pageNumbers[pageNumbers.length - 1] && (
                <Button onClick={handleNextPage}>
                    <FaChevronRight size={12} />
                </Button>
            )}
        </Container>
    );
}

export { Pagination };
