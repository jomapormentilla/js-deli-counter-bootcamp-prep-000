function takeANumber(lineNum, name){
  return  `Welcome, ${name}. You are ${katzDeliLine[lineNum] + 1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }else{
    return katzDeliLine[0]
  }
}