import { VerusdRpcInterface } from 'verusd-rpc-ts-client';

// const RPC_HOST = "https://api.verus.services"
const RPC_HOST = "https://rpc.vrsctest.komodefi.com"
const verusd = new VerusdRpcInterface("iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq", RPC_HOST);

export async function getInfo() {
    try {
        console.log("getInfo")
        // TODO removed await; how to make it asynchronous & what benefit
        // const res = await verusd.getCurrency('bridge.veth');
        const res = await verusd.getInfo();
        console.log(res.result)
        return res.result
    } catch (error){
        console.log("getInfo error")
    }
}

export async function getCurrency() {
    try {
        console.log("getCurrency")
        // TODO removed await; how to make it asynchronous & what benefit
        // const res = await verusd.getCurrency('bridge.veth');
        const res = await verusd.getCurrency('bridge.veth');
        console.log(res.result)
        return res.result
    } catch (error){
        console.log("getCurrency error")
    }
}

export async function getCurrencyState(currencyName) {
    try {
        console.log("getCurrencyState")
        // TODO removed await; how to make it asynchronous & what benefit
        // const res = await verusd.getCurrency('bridge.veth');
        const res = await verusd.getCurrencyState(currencyName);
        console.log(res.result)
        return res.result
    } catch (error){
        console.log("getCurrencyState error")
    }
}

export async function listCurrencies() {
    try {
        console.log("listCurrencies")
        // TODO removed await; how to make it asynchronous & what benefit
        // const res = await verusd.getCurrency('bridge.veth');
        const res = await verusd.listCurrencies();
        console.log(res.result)
        return res.result
    } catch (error){
        console.log("listCurrencies error")
    }
}

export default {
    getInfo,
    getCurrency,
    getCurrencyState,
    listCurrencies
}
