function deepFreeze(obj){
    Object.freeze(obj)

    const objPropNames = Object.getOwnPropertyNames(obj)
    console.log(objPropNames)
    for(propName of objPropNames){
        if(obj.hasOwnProperty(propName) && 
        obj[propName] != null){
            if(typeof obj[propName] === 'object'){
                deepFreeze(obj[propName])
            }else if (typeof obj[propName] === 'function'){
                Object.freeze(obj[propName])
            }
        } 
    }
}

let o = {
    item: 1,
    cb: {
        a: {
            b: {
                c: {
                    d: 3
                }
            }
        }
    },
    fn: function(){
        return 1
    },
    fn:{
        fn: function(){
            return 2
        }
    }
  };
  
  deepFreeze(o);
  o.item = 2;
  /* o.fn = function() {
    return 3;
  }; */
  o.fn.fn = function() {
    return 3;
  };
  console.log(o.item);
  console.log(o.fn.fn());
  
  