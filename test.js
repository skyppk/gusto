const duplicateWords = (words) => {
    if(1 <= words.length && words.length <= 100 && words.every(word => 1 <= word.length && word.length <= 100)){
        return [...words.reduce((preValue, curValue) => {
            let result = ''
            const preArray = [...preValue]
            const curArray = [...curValue]
            preArray.forEach(preWord => {
                if(curArray.find(matchWord => matchWord === preWord)){
                    result += preWord
                    curArray.splice(curArray.findIndex(matchedWord => matchedWord === preWord),1)
                }
            })
            return result
        }, words[0])]
    }
    return []
}

const input = ["bella","label","roller"]

const input2 = ["cool","lock","cook"]

console.log(duplicateWords(input));

console.log(duplicateWords(input2));