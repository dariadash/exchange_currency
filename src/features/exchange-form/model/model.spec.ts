import './init'
import { parseQueryFx } from './private'

describe('parser testing', () => {
    test('first parameter is string instead of number', async () => {
        const jsdomAlert = window.alert;
        window.alert = () => { }
        try {
            await parseQueryFx('kek usd in rub')
        } catch (jsdomAlert) {
            expect(jsdomAlert).toStrictEqual(
                Error()
            );
        }
        window.alert = jsdomAlert;
    })
    test('parameter undefined', async () => {
        const jsdomAlert = window.alert;
        window.alert = () => { }
        try {
            await parseQueryFx('2 rfewe in rrewub')
        } catch (jsdomAlert) {
            expect(jsdomAlert).toStrictEqual(
                Error()
            );
        }
        window.alert = jsdomAlert;
    })
    test('all parameters is numbers', async () => {
        const jsdomAlert = window.alert;
        window.alert = () => { }
        try {
            await parseQueryFx('1 23 6 45')
        } catch (jsdomAlert) {
            expect(jsdomAlert).toStrictEqual(
                Error()
            );
        }
        window.alert = jsdomAlert;
    })
    test('5 or more parameters', async () => {
        const jsdomAlert = window.alert;
        window.alert = () => { }
        try {
            await parseQueryFx('42 usd in rub usd eur')
        } catch (jsdomAlert) {
            expect(jsdomAlert).toStrictEqual(
                Error()
            );
        }
        window.alert = jsdomAlert;
    })
})