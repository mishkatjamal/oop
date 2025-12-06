let pr = new Promise(function(res,rej){
  let rn = Math.floor(Math.random()*10);
  if(rn >5){
    return res("resolved" + rn);
  }else{
    return rej("reject" + rn)
  }
})

pr.then(function(val){
  console.log(val);
  
}).catch(function(val){
  console.log(val);
  
})