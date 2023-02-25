function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getData(){
    return new Date();
}
  
  async function main() {
    while(true) {
      console.log('Containers rule!');
      console.log(getData());
      await sleep(5000);
    }
  }
  
  main();