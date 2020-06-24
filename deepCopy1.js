const deepCopy = obj => {
    if (obj instanceof Function)
        return (...args) => obj.apply(this, args);

    if (obj instanceof Array)
        return [...obj].map(item => deepCopy(item));

    if (typeof obj !== 'object' || !obj)
        return obj;

    const entries = Object.entries(obj);
    const resObj = {};
    for (const [key, value] of entries) {
        resObj[key] = deepCopy(value);
    }

    return resObj;
};