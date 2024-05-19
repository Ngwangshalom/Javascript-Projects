function caesarCipher(str, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return str.split("").map(char => {
        if (alphabet.includes(char.toLowerCase())) {
            const isUpperCase = char === char.toUpperCase();
            let newIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
            if (newIndex < 0) newIndex += 26;
            return isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
        }
        return char;
    }).join("");
}

const message = prompt("Enter a message to encrypt:");
const shift = parseInt(prompt("Enter a shift value:"));
const encryptedMessage = caesarCipher(message, shift);
console.log(`Encrypted message: ${encryptedMessage}`);
const decryptedMessage = caesarCipher(encryptedMessage, -shift);
console.log(`Decrypted message: ${decryptedMessage}`);
