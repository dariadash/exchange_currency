import { useStore } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { Loader } from '../../ui/Loader'
import {
    $answer,
    $queryText,
    $currencyFromExchange,
    loadAvailableCurrenciesFx,
    setQueryText,
    startExchange
} from '../model/private'


export const ExchangeForm = () => {
    const loading = useStore(loadAvailableCurrenciesFx.pending)
    const currencyFromExchange = useStore($currencyFromExchange)
    const queryText = useStore($queryText)
    const answer = useStore($answer)


    if (loading) {
        return <Loader />
    }
    return (
        <>
            <Info>
                <ChangeCurrency>
                    <InputWrapper>
                        <Input
                            value={queryText}
                            onChange={(e) => setQueryText(e.target.value)}
                        />
                        <Button onClick={() => startExchange()}>Выполнить запрос</Button>
                    </InputWrapper>
                </ChangeCurrency>
                {Boolean(answer) && (<>
                    <h3>{answer} {currencyFromExchange.toUpperCase()}</h3>
                </>)}
            </Info>
        </>
    )
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    padding-bottom: 10px;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`
const ChangeCurrency = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`