export const getPromiseStateInternal = function (promise) {
    return %PromiseStatus(promise);
}