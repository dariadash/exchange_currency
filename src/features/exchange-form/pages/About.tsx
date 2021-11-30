import React from "react";
import { useStore } from "effector-react";
import {
    $availableCurrencies,
    $currencyText,
    $currencyToExchange,
    setCurrencyText,
    startFetchCurrencies
} from "../model/private";
import styled from "styled-components";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export const About = () => {
    const currencies = useStore($availableCurrencies)
    const currencyToExchange = useStore($currencyToExchange)
    const currencyText = useStore($currencyText)


    return (
        <div>
            <Info>
                <h2>Страница с текущими курсами валют.</h2>
                <p>Текущая валюта:  {currencyToExchange.toUpperCase()} </p>
                <ChangeCurrency>
                    <p>Изменить текущую валюту: &nbsp;</p>
                    <InputWrapper>
                        <Input value={currencyText} onChange={(e) => setCurrencyText(e.target.value)} />
                        <Button onClick={() => startFetchCurrencies()}>Выполнить запрос</Button>
                    </InputWrapper>
                </ChangeCurrency>
            </Info>
            <ResultContainer>
                {currencies && Object.keys(currencies.currencyData).map((currencyKey) => (
                    <Result key={currencyKey}>1 {currencyKey.toUpperCase()} =
                        &nbsp;{Math.round((1 / currencies.currencyData[currencyKey]) * 1000) / 1000} {currencyToExchange.toUpperCase()}
                    </Result>
                ))}
            </ResultContainer>
        </div>
    )
}

const ResultContainer = styled.div`
    width: 900px;
    height: 880px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap; 
    padding-top: 10px;
`

const Result = styled.p`
    width: 200px;
    margin: 10px;
`

const ChangeCurrency = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    padding-bottom: 10px;
`