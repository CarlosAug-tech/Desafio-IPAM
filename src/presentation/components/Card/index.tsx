import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Button } from '../Button';
import { Info } from '../Info';
import { InformationSheet } from '../InformationSheet';

import { Container, TitleCard, ToolsCard } from './styles';

interface ICardProps {
    data: any;
    handleAdd?: Function;
}

function Card({ data, handleAdd }: ICardProps) {
    return (
        <Container>
            <TitleCard>{data.nome}</TitleCard>
            <InformationSheet data={data} />
            <ToolsCard>
                {handleAdd && (
                    <Button onClick={() => handleAdd(data)}>
                        <FaPlus size={14} />
                        <Info
                            textInfo="Adicionar distrito na lista"
                            top="52px"
                        />
                    </Button>
                )}
            </ToolsCard>
        </Container>
    );
}

export { Card };
