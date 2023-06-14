export default function accessImmutableObject(object, array) {
    Object.keys(object).forEach(key => {
        if (object[key] instanceof Object) {
            accessImmutableObject(object[key], array);
        } else {
            if (array.includes(key)) {
                console.log(object[key]);
            }
        }
    });
}
