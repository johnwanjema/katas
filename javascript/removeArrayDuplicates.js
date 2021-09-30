// Remove all the duplicates from the array using a standart build-in method 

// Array.prototype.filter(); return the array containing unique values only.

// method 1
// use a spread operator and Set Constructor
// The Set object lets you store unique values of any type, whether primitive values or object references.

function unique(arr) {
    return uniq = [...new Set(array)];
}

// method 2
// Use filter
function unique(arr) {
    return arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })
}