const key = 130;

function encrypt(plainText) {
  let cypherText = '';
  for (let i = 0; i < plainText.length; i++) {
    let ascii = plainText.charCodeAt(i);
    ascii += key;
    const char = String.fromCharCode(ascii);
    cypherText += char;
  }
  return cypherText;
}

function decrypt(cypherText) {
  let plainText = '';
  for (let i = 0; i < cypherText.length; i++) {
    let ascii = cypherText.charCodeAt(i);
    ascii -= key;
    const char = String.fromCharCode(ascii);
    plainText += char;
  }
  return plainText;
}

module.exports = {
  encrypt,
  decrypt,
};
