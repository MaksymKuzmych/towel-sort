// You should implement your task here.

module.exports = function towelSort(matrix) {
    return Array.isArray(matrix)
        ? matrix.map((el, idx) => (idx % 2 === 0 ? el : el.reverse())).flat()
        : [];
};
