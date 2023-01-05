import React from 'react';

import {
    Container,
    HeaderInfoSheet,
    HeaderDescriptionInfoSheet,
    BodyInfoSheet,
    BodyDescriptionInfoSheet,
    TitleInfoSheet,
} from './styles';

interface IInformationSheetProps {
    data: any;
}

function InformationSheet({ data }: IInformationSheetProps) {
    return (
        <>
            {data && (
                <Container>
                    <TitleInfoSheet>Informações Gerais</TitleInfoSheet>
                    <HeaderInfoSheet>
                        <HeaderDescriptionInfoSheet>
                            <strong>Estado:</strong>
                            <span>
                                {
                                    data.municipio.microrregiao.mesorregiao.UF
                                        .nome
                                }
                            </span>
                        </HeaderDescriptionInfoSheet>
                        <HeaderDescriptionInfoSheet>
                            <strong>Município:</strong>
                            <span>{data.municipio.nome}</span>
                        </HeaderDescriptionInfoSheet>
                        <HeaderDescriptionInfoSheet>
                            <strong>Distrito:</strong>
                            <span>{data.nome}</span>
                        </HeaderDescriptionInfoSheet>
                    </HeaderInfoSheet>
                    <BodyInfoSheet>
                        <TitleInfoSheet>Microrregião</TitleInfoSheet>
                        <BodyDescriptionInfoSheet>
                            <strong>Nome:</strong>
                            <span>{data.municipio.microrregiao.nome}</span>
                        </BodyDescriptionInfoSheet>
                        <TitleInfoSheet>Mesorregião</TitleInfoSheet>
                        <BodyDescriptionInfoSheet>
                            <strong>Nome:</strong>
                            <span>
                                {data.municipio.microrregiao.mesorregiao.nome}
                            </span>
                        </BodyDescriptionInfoSheet>
                        <TitleInfoSheet>Região-Imediata</TitleInfoSheet>
                        <BodyDescriptionInfoSheet>
                            <strong>Nome:</strong>
                            <span>
                                {data.municipio['regiao-imediata'].nome}
                            </span>
                        </BodyDescriptionInfoSheet>
                        <TitleInfoSheet>Região-Intermediaria</TitleInfoSheet>
                        <BodyDescriptionInfoSheet>
                            <strong>Nome:</strong>
                            <span>
                                {
                                    data.municipio['regiao-imediata'][
                                        'regiao-intermediaria'
                                    ].nome
                                }
                            </span>
                        </BodyDescriptionInfoSheet>
                    </BodyInfoSheet>
                </Container>
            )}
        </>
    );
}

export { InformationSheet };
