// Test - 1 (Разработать функцию сортировки числовых значений в одномерном массиве.
// Функция принимает на вход не сортированный массив, и режим сортировки (по возрастанию или по убыванию)
// возвращает отсортированный массив)

const anyArr = [3, 12, 25, 1, 8, 123, 0, 4, 16]; // unsorted array with random numbers

let sortMode = function ascendArr(a, b) {  // ascending sort function
    return (a - b);                        // we can replace a and b to make descending function
}

function sortArr(someArr, someFunc) {   // returns sorted array
    return someArr.sort(someFunc);
};

sortArr(anyArr, sortMode);

console.log(anyArr); // cheking the result



