function accum(s) {
    //declare empty array
    var array = [];
    for (i = 0; i < (s.length); i++) {
        //make first character of string uppercase and the rest of the strings lower case depending on position  
        array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    };
    return array.join('-');
}

//Example
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
