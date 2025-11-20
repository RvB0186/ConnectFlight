// src/pages/Contato/FormularioContato.jsx
import React from 'react';
// Importa os estilos que acabamos de definir
import * as S from './FormularioContatoStyles';

export function FormularioContato() {
    // Lógica simples de manipulação de formulário pode ser adicionada aqui
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulário enviado! (A lógica de integração com a API viria aqui, usando Axios e o método POST [8])');
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Label htmlFor="name">Nome:</S.Label>
            <S.Input id="name" placeholder="Seu nome completo" required />

            <S.Label htmlFor="email">E-mail:</S.Label>
            <S.Input id="email" type="email" placeholder="seuemail@exemplo.com" required />

            <S.Label htmlFor="message">Mensagem:</S.Label>
            <S.TextArea id="message" placeholder="Escreva sua mensagem aqui..." rows="5" required />

            <S.SubmitButton type="submit">
                Enviar Contato
            </S.SubmitButton>
        </S.Form>
    );
}