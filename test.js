import { describe, it } from 'node:test';
import Assert from 'node:assert';
import {getPromiseState, kFulfilled, kPending, kRejected} from "./index.js";

describe('getPromiseState', () => {
    it('should return the state of a pending promise', async () => {
        let resolve;
        const promise = new Promise((re) => { resolve = re; });
        Assert.deepStrictEqual(getPromiseState(promise), kPending);
        resolve();
        await promise;
    });

    it('should return the state of a fulfilled promise', () => {
        const promise = Promise.resolve();
        Assert.deepStrictEqual(getPromiseState(promise), kFulfilled);
    });

    it('should return the state of a rejected promise', async () => {
        const promise = Promise.reject();
        Assert.deepStrictEqual(getPromiseState(promise), kRejected);

        try {
            await promise;
        } catch (e) {
            // ignore
        }
    });

});