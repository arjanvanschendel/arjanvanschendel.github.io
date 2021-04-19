function handleSubmit(){
    var bindName = document.getElementById("bindTitle").value;
    var bindInput = document.getElementById("bindInput").value;
    var bindKey = document.getElementById("bindKey").value;
    document.getElementById("bindOutput").value = generateBind(bindName, bindKey, bindInput);
}

function generateBind(name, key, input){
    var output = `alias \"${name}\" \"${name}0\"\n`;
    var inputLines = input.split("\n");
    var indexOffset = 0;
    for(index in inputLines){
        var inputLine = inputLines[index];
        if (inputLine === "") indexOffset += 1;
        else output += generateBindLine(inputLine, name, parseInt(index)-indexOffset, (index == inputLines.length-1));
    }
    return output + `bind \"${key}\" \"${name}\"`;
}

function generateBindLine(input, name, index, isLast){
    index = isLast ? 0 : parseInt(index)+1;
    var toReturn = `alias \"${name}${index}\" \"say ${input}; alias ${name} ${name}${index}\"`;
    return toReturn + "\n";
}