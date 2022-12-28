const range = (start, end, step = 1, isRight = false) => {
    const startVal = !isRight ? (!end ? 0 : start) : end ? end : start;
    const endVal = !isRight ? (!end ? start : end) : end ? start : 0;
    const stepVal = !step ? 1 : step;
    const arr = [];
    console.log(`start: ${startVal}, end: ${endVal}, step: ${stepVal}`);
    for (
        let i = startVal;
        endVal > 0 ? i < endVal : i > endVal;
        endVal < 0 && stepVal > 0 ? (i -= stepVal) : (i += stepVal)
    ) {
        arr.push(step ? i : 1);
    }
    return arr;
};

export default (start, end, step) => range(start, end, step, true);