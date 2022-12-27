export default (end, start = 0, step = 1) => {
    const arr = [];
    for (
        let i = start;
        end > 0 ? i < end : i > end;
        end < 0 && step > 0 ? (i -= step ? step : 1) : (i += step ? step : 1) // check step to handle 0 value
    ) {
        arr.push(!step ? 1 : i);
    }
    return arr;
};
