import styled from "styled-components";

export interface IButton extends HTMLButtonElement {
    theme: string
}

export const Button = styled.button`
    font-size: 14px;
    padding: 16px;
    display: block;
    background: ${({ theme }) => theme === 'dark' ? 'black' : 'white'};
    color: ${({ theme }) => theme === 'dark' ? 'white' : 'black'};
`