//?write a function that determines whether or not a given string is a palindrome. 
//?spelled the same both forwards and backwards regardless of punctuation or word breaks


const palindromes = function(sentence) {
    sentence = sentence.replace(/[^\w\s]|_/g, '')
                       .replace(/\s+/g, '');
    //replaces everything not letter/number/ with '' 
    return sentence.toLowerCase() === sentence.split('').reverse().join('').toLowerCase();
    //split the sentence into an array, reverse it, then join into a single string 
    
}
module.exports = palindromes

//*theodinproject solution 
//very similar to the above 
