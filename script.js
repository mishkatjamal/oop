function abc(fn){
  fn(function(fn2){
    fn2(function(fn4){
      fn4(function(fn6){
        fn6();
      })
    });
  });
}
abc(function(fn1){
fn1(function(fn3){
fn3(function(fn5){
fn5(function(){
console.log("fun called");
});
});
});
})