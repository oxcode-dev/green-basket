export const useInitials = (fullName: string) :string => {
    const names = fullName.trim().split(' ');

    if (names.length === 0) return '';
    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
}

export function formatDate(value: string|null) {
    if(!value) return '';
    return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(
        new Date(value)
    )
}

export function numberFormat(number: number|null) {
    if(!number) return '';

    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Check whether an object is empty
export const isEmpty = (obj: {}) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function moneyFormat(number: number|null) {
    return `<span>&#8358;${numberFormat(number)}</span>`
}