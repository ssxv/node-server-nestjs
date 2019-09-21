export const unique = (value, index, self) => {
    return self.indexOf(value) === index;
};

export const roundTo2ToNumber = (value) => {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    if (!isNaN(value) && typeof value === 'number') {
        return Math.round(value * 100) / 100;
    }
    return value;
};
