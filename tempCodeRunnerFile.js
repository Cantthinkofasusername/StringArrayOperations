function palindrome(string1, string2){
    let string1 = prompt("Enter first word: ");
    let string2 = prompt("Enter second word: ");

    let reversedstring1 = reversedString(string1);
    let reversedstring2 = reversedString(string2);

    function reversedString(str) {
        return str.split("").reverse().join("");
    }

     console.log(string1);
     console.log(string2);
}