// src/pages/Home/index.jsx
import React from 'react';
import { Header } from '../../components/Header'; // Certifique-se da exportação nomeada: export function Header()
import  MainContent  from './MainContent.jsx'; // Componente que contém o layout principal (já corrigimos a exportação nomeada aqui)
import { Footer } from '../../components/Footer'; // Componente do rodapé (já corrigimos a exportação nomeada aqui)
import  GlobalStyles  from '../../styles/global'; // Já configurado no main.jsx, mas manter imports aqui ajuda a clareza

export function Home() {
    return (
        // Uso de Fragment (<>) para agrupar sem adicionar um <div> extra ao DOM
        <>
            <Header /> 
            <MainContent /> 
            <Footer />
        </>
    );
}
