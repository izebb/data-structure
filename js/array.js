export function hasUniqueChar(str) {
  let charSet = {};
  for(let s of  str){
    if( charSet[s] ){
      return false;
    }else{
      charSet[s] = s;
    }
  }

  return true;
}

export function isPermutation(str1, str2) {
  if(str1.length !== str2.length){
    return false;
  }

  let charMap = {};
  for(let s of str1 ){
    if(!charMap[s]){
      charMap[s] = 1;
    }else{
      charMap[s]++;
    }
  }


  for(let v of str2){
    if(!charMap[v]){
      return false;
    }

    if(charMap[v] < 1){
      return false;
    }
    charMap[v]--
  }

  return true;
}

export function URLifyRegex(str){
  let url = '';
  str = str.trim();
  return str.replace(/\s+/g, '%20');
}
