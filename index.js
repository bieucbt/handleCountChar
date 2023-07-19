

const str = 'hfdawhwhcoomdd'
const arr = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow'] 
const output = []

function handleCountChar(str){
  for(let i=0; i<str.length - 1; i++){
    const char = str[i] + str[i+1]
    console.log(char)
    if(str[i] == 'w')
    {
      output.push(str[i])
    }
    else if( arr.includes(char)){
      output.push((char))
      i++
    }
  }
} 


handleCountChar(str)
console.log(output)