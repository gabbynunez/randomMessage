const sentence = {
    subject:['I', 'You' , 'We', 'They'],
    verb :['ran', 'read', 'walk', 'dance','dont take a shower'],
    complement : ['in the dark', 'on the bed' , 'with Carlos', 'and cry']
};

const generateRandomNumber = (num)=>{
    return Math.floor(Math.random()*num)
};

const generatePhrase = (sentence)=>{
    let phrase = [];
    
    for (word in sentence){
        let randomNum = generateRandomNumber(sentence[word].length);
        phrase.push(sentence[word][randomNum]);
    }
    return phrase.join(' ');

};

console.log(generatePhrase(sentence));
 
