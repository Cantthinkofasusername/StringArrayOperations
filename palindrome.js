function palindrome(){
    let string1 = prompt("Enter first word: ");
    let string2 = prompt("Enter second word: ");

    let reversedstring1 = reversedString(string1);
    let reversedstring2 = reversedString(string2);

    function reversedString(str) {
        return str.split("").reverse().join("");
    }

    alert("First word is " + string1 + "." + " Reversed first word is " + reversedstring1 + ".")
    alert("Second word is " + string2 + "." + "REversed second word is " + reversedstring2 + ".")

    alert("First word is " + Boolean(string1==reversedstring1))
    alert("Second word is " + Boolean(string2==reversedstring2))
}