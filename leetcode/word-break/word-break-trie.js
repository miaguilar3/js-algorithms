/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const wordBreakMap = new Map();
  const wordTrie = new Trie();
  for(let word of wordDict){
    wordTrie.insert(word);
  }  
  return wordBreakTrieSearch(s, wordTrie, wordBreakMap);
};

// return true if str can be broken into dictionary words
// searches string in trie recursing at each end of word
// with the remaining substring.
var wordBreakTrieSearch = function(str, wordTrie, wordBreakMap){
  if(wordBreakMap.has(str)){ return wordBreakMap.get(str); }
  if(str.length === 0){ return true; }

  // walk through trie
  let node = wordTrie.head;
  for(let i = 0; i < str.length; i++){
    let char = str.charAt(i).toLowerCase();
    if(!node.children[char]){
      wordBreakMap.set(str, false);
      return false;
    }
    else if(node.children[char].children[null]){
      // found end of word, recurse
      if(wordBreakTrieSearch(str.substring(i + 1), wordTrie, wordBreakMap)){
        wordBreakMap.set(str, true);
        return true;
      }
    }
    node = node.children[char];
  }
  wordBreakMap.set(str, false);
  return false;
}

class TrieNode{
  constructor(val){
    this.val = val;
    this.children = {};
  }
}

class Trie{
  constructor(){
    this.head = new TrieNode('*');
  }

  insert(str){
    let node = this.head;
    for(let i = 0; i < str.length; i++){
      let char = str.charAt(i).toLowerCase();
      if(!node.children[char]){
        node.children[char] = new TrieNode(char);
      }
      node = node.children[char];
    }
    // signify end of word
    node.children[null] = true;
  }
}