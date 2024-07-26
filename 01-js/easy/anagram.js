const charCountMap = new Map();

function isAnagram(str1, str2) {
  
  const preprocess = (str) => str.toLowerCase().replace(/\s+/g, '');

  const normalizedStr1 = preprocess(str1);
  const normalizedStr2 = preprocess(str2);

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  

  
  for (const char of normalizedStr2) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  
  for (const char of normalizedStr1) {
    if (!charCountMap.has(char)) {
      return false;
    }
    charCountMap.set(char, charCountMap.get(char) - 1);
    if (charCountMap.get(char) < 0) {
      return false;
    }
  }

  
  for (const count of charCountMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
if(isAnagram("hello","hello")){
  console.log(charCountMap.values());
}
module.exports = isAnagram;
