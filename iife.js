(function () {
    //Module code actually lives in here
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
    //Module code actually lives in here
    const superHero = "Superman";
    console.log(superHero);
  })();

//before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope
//This saves us from having to worry about conflicting variables or functions
// There is proper encapsulation and reusability is unaffected