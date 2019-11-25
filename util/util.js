module.exports.exists = exists;

function exists(){
  for(var arg of Array.from(arguments)){
    if([null, undefined].includes(arg)){
      return false;
    }
  }
  return true;
}