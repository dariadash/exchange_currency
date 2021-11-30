import { combine, createDomain } from "effector";
import { AvailableCurrencyData, ParseQueryResponse } from "./types";

export const d = createDomain()

export const $availableCurrencies = d.store<AvailableCurrencyData | null>(null)
export const loadAvailableCurrenciesFx = d.effect<string, AvailableCurrencyData, Error>()
export const instantLoadCurrencies = d.event()

export const parseQueryFx = d.effect<string, ParseQueryResponse, Error>()

export const $queryText = d.store('')
export const setQueryText = d.event<string>()
export const startExchange = d.event()

export const $currencyText = d.store('')
export const setCurrencyText = d.event<string>()
export const startFetchCurrencies = d.event()


export const $currencyToExchange = d.store('eur')
export const $currencyFromExchange = d.store('')
export const $currencyValue = d.store(0)

export const $answer = combine(
    $availableCurrencies,
    $currencyFromExchange,
    $currencyValue,
    $currencyToExchange,
    (currencies, currencyToExchange, value, toExchange) => {
        if (!currencies) {
            return null
        }
        return value * currencies.currencyData[currencyToExchange]
    }
)