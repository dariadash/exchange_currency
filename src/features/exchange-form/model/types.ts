export type ParseQueryResponse = {
    value: number,
    currencyFromExchange: string,
    currencyToExchange: string,
}

export type AvailableCurrencyData = {
    currencyData: { [key: string]: number },
    currencyToExchange: string
}