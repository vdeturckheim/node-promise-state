import { describe, it } from 'node:test';
import Assert from 'node:assert';
import {getPromiseState, kFulfilled, kPending, kRejected} from "./index.js";

describe('getPromiseState', () => {
    it('should return the state of a pending promise', () => {
        const promise = new Promise(() => {});
        Assert.deepStrictEqual(getPromiseState(promise), kPending);
    });

    it('should return the state of a fulfilled promise', () => {
        const promise = Promise.resolve();
        Assert.deepStrictEqual(getPromiseState(promise), kFulfilled);
    });

    it('should return the state of a rejected promise', () => {
        const promise = Promise.reject();
        Assert.deepStrictEqual(getPromiseState(promise), kRejected);
    });

});