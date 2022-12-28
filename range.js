export default (start, end, step = 1, isRight = false) => {
    const startVal = !end ? 0 : start;
    const endVal = !end ? start : end;
    const stepVal = !step ? 1 : step;
    const arr = [];
    for (
        let i = startVal;
        endVal > 0 ? i < endVal : i > endVal;
        endVal < 0 && stepVal > 0 ? (i -= stepVal) : (i += stepVal)
    ) {
        arr.push(step ? i : 1);
    }
    return isRight ? arr.reverse() : arr;
};
