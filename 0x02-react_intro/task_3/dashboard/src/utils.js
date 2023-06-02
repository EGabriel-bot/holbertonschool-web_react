export function getFullYear(){
    const today = new Date();
    let date = today.getFullYear();
    return Number(date);
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}