//Задача № 1
function cachingDecoratorNew(func) {
  let cache = []; 
  return function (...args) {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache !== undefined) {
        console.log("Из кэша: " + objectInCache.result);
        return "Из кэша: " + objectInCache.result; 
    }
    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5){
        cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;    
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount++;
    if (!timeoutId){
        func(...args);
        wrapper.count++; 
    }
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        func(...args);
        wrapper.count++;
    }, delay)
  }
  wrapper.count = 0;
  wrapper.allCount = 0;  
  return wrapper;
}
