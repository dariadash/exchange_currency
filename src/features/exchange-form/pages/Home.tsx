import React from "react";
import { useStore } from "effector-react";
import { ExchangeForm } from "../view/ExchangeForm";
import { $currencyToExchange } from "../model/private";
import styled from "styled-components";

export const Home = () => {
    const currencyToExchange = useStore($currencyToExchange)
    return (
        <div>
            <Info>
                <h2>Конвертер из одной валюты в другую. </h2>
                <p>Текущая валюта: {currencyToExchange.toUpperCase()} </p>
            </Info>
            <ExchangeForm />
        </div>
    )
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    padding-bottom: 10px;
`