export class FizzBuzz {
  
  value : number = 0;
  
  next(){
    ++this.value;

    if(this.value%3 === 0){
      return 'fizz';
    }
    return this.value.toString();  
  }
}
