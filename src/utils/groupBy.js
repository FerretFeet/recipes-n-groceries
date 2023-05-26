
export const groupBy = (items, key) => items.reduce(
    //for sortedGrocery List
    (result, item) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
)