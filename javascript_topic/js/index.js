concatinate = (string1, string2) => {
    return "hello there "+string1+" "+string2;
}

checkVowelConsonant = (char) =>{
    switch (char) {
        case "a":
            
        case "e":
            
        case "i":
            
        case "o":
            
        case "u":
            return "It is a Vowel";   

        default:
            return "It is a Consonant";
    }
}
compute = (operatorS, num1, num2) => {
    
    if(operatorS=="+"){
        return num1 + num2;
    }else if(operatorS=="-"){
        return num1 - num2;
    }else if(operatorS=="/"){
        return num1 / num2;
    }else if(operatorS=="*"){
        return num1 * num2;
    }else{
        return "No executions";
    }
}