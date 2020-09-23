function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  
  return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }else{
    let string = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift(katzDeliLine[0])
    return string
  }
}

function currentLine(katzDeliLine){
  let myString = `The line is currently: `
  
  for(let i=1; i<katzDeliLine.length - 1; i++){
    myString += `${i}. ${katzDeliLine[i]} `
  }
  
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`
  }else{
    return myString 
  }
}