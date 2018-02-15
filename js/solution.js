(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var count = 0;

        var boundary = (row, col) => [
            [row - 1, col],
            [row, col - 1],
            [row + 1, col],
            [row, col + 1],
        ];

        var visited = map.map(row => row.map(() => false));

        function dfs(row, col) {
            if (visited[row][col]) return false;

            visited[row][col] = true;

            if (map[row][col] == WATER) return false;

            boundary(row, col)
                .filter(cell => cell[0] >= 0 && cell[0] < map.length && cell[1] >= 0 && cell[1] < map[0].length)
                .filter(cell => map[cell[0]][cell[1]] == ISLAND)
                .forEach(cell => dfs(...cell));

            return true;
        }
        
        map.forEach((row, i) => row.forEach((cell, j) => dfs(i, j) && count++));

        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
