import { forward, sample } from "effector";
import { BASE_CURRENCY_URL } from "./const";
import {
    $availableCurrencies,
    $queryText,
    loadAvailableCurrenciesFx,
    instantLoadCurrencies,
    parseQueryFx,
    setQueryText,
    $currencyToExchange,
    startExchange,
    $currencyValue,
    $currencyText,
    setCurrencyText,
    startFetchCurrencies,
    $currencyFromExchange
} from "./private";

$availableCurrencies
    .on(loadAvailableCurrenciesFx.doneData, (_, data) => data)

$currencyToExchange
    .on(loadAvailableCurrenciesFx.doneData, (_, { currencyToExchange }) => currencyToExchange)

$currencyFromExchange
    .on(parseQueryFx.doneData, (_, { currencyFromExchange }) => currencyFromExchange)

$currencyValue
    .on(parseQueryFx.doneData, (_, { value }) => value)

$queryText
    .on(setQueryText, (_, s) => s)

$currencyText
    .on(setCurrencyText, (_, s) => s)


forward({
    from: instantLoadCurrencies,
    to: loadAvailableCurrenciesFx.prepend(() => 'eur')
})

sample({
    clock: startExchange,
    source: $queryText,
    target: parseQueryFx
})

sample({
    clock: startFetchCurrencies,
    source: $currencyText,
    target: loadAvailableCurrenciesFx
})

sample({
    clock: parseQueryFx.doneData,
    fn: ({ currencyToExchange }) => currencyToExchange,
    target: loadAvailableCurrenciesFx
})

loadAvailableCurrenciesFx.use(async (currency) => {
    try {
        const response = await fetch(`${BASE_CURRENCY_URL}/${currency}.min.json`)
        const data = await response.json()
        return {
            currencyData: data[currency],
            currencyToExchange: currency
        }
    } catch (error) {
        console.error(error)
        alert('Произошла ошибка запроса')
        throw error;
    }
})

parseQueryFx.use(async (queryText) => {
    const textParsed = queryText.split(' ')

    const value = parseInt(textParsed[0])
    if (isNaN(value)) {
        alert('Значение передано неправильно')
        throw new Error()
    }
    return {
        value: parseInt(textParsed[0]),
        currencyToExchange: textParsed[1],
        currencyFromExchange: textParsed[3],
    }
})
