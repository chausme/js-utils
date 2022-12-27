export default arr => (!Array.isArray(arr) || !arr.length ? undefined : arr[arr.length - 1]);
