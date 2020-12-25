export function throttle(fn, delay){
    let prev = Date.now();

    return function(){
        let now = Date.now();
        let context = this;
        let args = arguments;
        if(now-prev >= delay){
            fn.apply(context, args);
            prev = now;
        }
    }
    
}