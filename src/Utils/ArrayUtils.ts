/**
 * Funzione utilizzata per filtrare un array ed ottenere solo
 * i valori unici.
 *
 * @export
 * @param {*} x
 * @param {*} i
 * @param {*} a
 * @returns {Boolean}
 */
export function filterUnique(x, i, a) : Boolean 
{
    return a.indexOf(x) === i;
} 