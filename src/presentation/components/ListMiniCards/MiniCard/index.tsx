import React, { useCallback, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { Button } from '../../Button';
import { Info } from '../../Info';
import { InformationSheet } from '../../InformationSheet';
import { Modal } from '../../Modal';

import {
    Container,
    ToolsMiniCard,
    HeaderMiniCard,
    TitleMiniCard,
    BodyMiniCard,
    BodyTitleMiniCard,
    BodyDescriptionMiniCard,
    FooterMiniCard,
    ModalContentMiniCard,
} from './styles';

interface IMiniCardProps {
    data: any;
    removeMiniCard?: Function;
}

function MiniCard({ data, removeMiniCard }: IMiniCardProps) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setOpenModal(true);
    }, [openModal]);

    return (
        <Container>
            <HeaderMiniCard>
                <TitleMiniCard>{data.nome}</TitleMiniCard>
            </HeaderMiniCard>
            <BodyMiniCard>
                <BodyTitleMiniCard>Estado</BodyTitleMiniCard>
                <BodyDescriptionMiniCard>
                    <span>
                        {data.municipio.microrregiao.mesorregiao.UF.nome}
                    </span>
                </BodyDescriptionMiniCard>
                <BodyTitleMiniCard>Município</BodyTitleMiniCard>
                <BodyDescriptionMiniCard>
                    <span>{data.municipio.nome}</span>
                </BodyDescriptionMiniCard>
                <BodyTitleMiniCard>Distrito</BodyTitleMiniCard>
                <BodyDescriptionMiniCard>
                    <span>{data.nome}</span>
                </BodyDescriptionMiniCard>
            </BodyMiniCard>
            <FooterMiniCard>
                <Button onClick={handleOpenModal}>
                    <span>Ver detalhes</span>
                </Button>
            </FooterMiniCard>
            <ToolsMiniCard>
                {removeMiniCard && (
                    <Button onClick={() => removeMiniCard(data.id)}>
                        <FaTrash />
                        <Info textInfo="Excluir distrito" />
                    </Button>
                )}
            </ToolsMiniCard>
            <Modal
                item={data}
                title={data.nome}
                openModal={openModal}
                closeModal={setOpenModal}
            >
                <ModalContentMiniCard>
                    <InformationSheet data={data} />
                </ModalContentMiniCard>
            </Modal>
        </Container>
    );
}

export { MiniCard };
