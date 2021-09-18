// write the function isAnagram
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.
// [1] For example, the word anagram itself can be 
// rearranged into nag a ram, also the word binary into brainy and the word adobe into abode.
var isAnagram = function (test, original) {
    var a = test.replace(/[^\w]/g).toLowerCase().split('').sort().join();
    var b = original.replace(/[^\w]/g).toLowerCase().split('').sort().join();
    return (a === b) ? true : false;
};