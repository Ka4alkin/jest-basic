class Lodash {
    compact(array) {
        return array.filter(val => !!val)
    }

    groupBy(array, prop) {
       return array.reduce((acc, item) => {
        const key = typeof prop === 'function' ? prop(item) : item[prop]
        // console.log({item})
        // console.log({key})
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(item)
        // console.log(acc)
        return acc
    }, {})
    }
}

module.exports = Lodash
