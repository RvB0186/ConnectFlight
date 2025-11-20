import React from 'react';
import * as S from './styles';

export function Header() {
    return (
        <S.Container>
            <S.Logo>ConnectFlight</S.Logo>
            <S.Nav>
                <S.NavLink to="/">Home</S.NavLink>
                <S.NavLink to="/destinos">Destinos</S.NavLink>
                <S.NavLink to="/sobre">Sobre</S.NavLink>
                <S.NavLink to="/contato">Contato</S.NavLink>
            </S.Nav>
        </S.Container>
    );
}