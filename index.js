
const hyphenator = require('./node_modules/hyphenator/hyphenate.js').Hyphenator;

function shortenName(name, targetStrLength, opts) {
   opts = opts || {};

   if(!targetStrLength){
      var l = name.length;
      targetStrLength = l;

      if (l > 30){
         targetStrLength = 18;
      }else if (l > 20){
         targetStrLength = 0.55 * l;
      }else if (l > 10){
         targetStrLength = 0.8 * l;
      }
   }


   name = name || '';
   name = name.replace(/-/g, " ");
   name = name.replace(/& /g, "");
   name = name.replace(/and /g, "");
   name = name.replace(/And /g, "");
   name = name.replace(/und /g, "");
   name = name.replace(/Und /g, "");
   name = name.replace(/für /g, "");
   name = name.replace(/\(/g, "");
   name = name.replace(/\)/g, "");
   name = name.replace(/   /g, " ");
   name = name.replace(/  /g, " ");
   let words = name.split(" ");


   // cut away words at the end for very long terms
   if (words.length >= 5){
      words = words.slice(0, 3)
   }


   // each word only two syllables
   for (word of words) {
      word = twoSyllables(word);
   }


   // shorten 4. word
   if( words.length > 4){
      words[4] = oneSyllable(words[4]);
   }
   // shorten 3. word
   if( words.length > 3){
      words[3] = oneSyllable(words[3]);
   }

   if(nameLength(words) > targetStrLength && words.length > 2){
      words[2] = oneSyllable(words[2]);
   }

   // initial
   for (var i = words.length - 1; i > 0; i--) {
      if (nameLength(words) > targetStrLength){
         words[i] = initial(words[i]);
      } else {
         return words.join(' ');
      }
   }
   words = words.join(' ');

   words = words.replace(/\. /g, '');

   return words;
}

function twoSyllables(word){
      let hyphs = hyphenator.hyphenate_word(word);
      let newWord = hyphs[0];
      if (hyphs[1]) newWord += hyphs[1];
      if (hyphs[2]) newWord += '.';
      return newWord;
}

function oneSyllable(word){
      word = word || '';
      word = word.replace('.', '');
      let hyphs = hyphenator.hyphenate_word(word);
      hyphs[0] += '.';
      return hyphs[0];
}

function initial(word){
   word = word[0] || "";
   if (word) word += '.';
   return word;
}

function nameLength (words){
   return words.join('').length;
}

if (module && typeof module.exports) {
   module.exports = {
      shortenName
   };
}
