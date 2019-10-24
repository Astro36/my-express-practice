export const filterObject = (object: Record<string, any>, keys: Array<string>) => Object.values(object)
    .filter(([key]: [string]): boolean => keys.includes(key))
    .reduce((accumulator, [key, value]) => {
        accumulator[key] = value;
        return accumulator;
    }, {});
