function deleteVowels(str) {
  const Vowels = /[aeiouAEIOU]/g;
  return str.replace(Vowels, "");
}

const text = "Hola, ¿cómo estás?";
const result = deleteVowels(text);
console.log(result);
