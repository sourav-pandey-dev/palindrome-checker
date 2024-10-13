function CheckPalindrome(event){
    event.preventDefault();
    let result = document.getElementById("result");
    let input = document.getElementById("input").value;
    let reversed = input.split("").reverse().join("");
    if(input === reversed){
        result.textContent=("The input is a palindrome");
        } else {
            result.textContent=("The input is not a palindrome");
        }
}