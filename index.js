import v8 from 'node:v8';

v8.setFlagsFromString('--allow-natives-syntax');

const { getPromiseStateInternal } = await import('./lib.js');

export const kPending = Symbol('pending');
export const kFulfilled = Symbol('fulfilled');
export const kRejected = Symbol('rejected');

const status = [kPending, kFulfilled, kRejected];

export const getPromiseState = function (promise) {
    return status[getPromiseStateInternal(promise)];
}
