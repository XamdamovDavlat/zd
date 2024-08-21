function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
              
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                
                swapped = true;
            }
        }
        
        n--;
    } while (swapped);

    return arr;
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));

let stopNumber = parseInt(prompt("Введите число, на котором нужно остановиться: "), 10);

let a = 0;
let b = 1;

console.log(a); // Выводим 0
console.log(b); // Выводим 1

while (true) {
    let nextNumber = a + b;
    
    if (nextNumber > stopNumber) {
        break; 
    }
    
    console.log(nextNumber); 
    
    a = b;
    b = nextNumber;
}