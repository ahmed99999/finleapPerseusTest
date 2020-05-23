
export function paginate(items, pageNumber, pageSiye) {

    if (!Array.isArray(items)) throw new Error('first argument in paginate must an Array(List)');
    if (typeof pageNumber !== 'number' || typeof pageSiye !== 'number') throw new Error('second and third aguments must be of type Numbers');

    return items.filter((item, index) => {
        return Math.ceil((index + 1) / pageSiye) === pageNumber;
    });
}