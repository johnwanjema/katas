function highAndLow(numbers){
    // split numbers
    numbers = numbers.split(' ').map(Number);
    // get highest and lowes tnumber
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}