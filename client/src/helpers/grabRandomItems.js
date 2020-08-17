const grabRandomItems = function(list, current) {
    const freqId = [];
    const index = [];
    
    while(freqId.length < 3){
      var rnd = Math.floor(Math.random() * 20);
  
      if(!freqId.includes(list[rnd].item_id) && list[rnd].item_id !== current.item_id ){
        freqId.push(list[rnd].item_id);
        index.push(rnd);
      }
    }
   return index;
  };

  export default grabRandomItems;