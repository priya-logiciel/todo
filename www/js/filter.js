angular
  .module('starter.filters', [])
  .filter('myformat', function () {
        return function(x,replacewith) {
            let text =x.split('i')
            return text.join(replacewith)
        }
      
    })
       //show value divided by 3
        .filter('myFormat1' .function(){
            return function (x){
             
                var selectedOjs = [];
            
                x.forEach(element) => {
                if(element.value % 3 == 0 ) selectedOjs.push(element);
            })
              retuen selectedOjs;
        };
    })


       