let counter = 0

let getData = () => {
    console.log('throttling -> Fetching API > ', counter++)
}

let throttle = function(fn, delay){
    let throttledTimeout = null
    let storedEvent = null

    let throttledEventListener = event => {
        storedEvent = event
        let shouldHandleEvent = !throttledTimeout

        if(shouldHandleEvent){
            fn(storedEvent)
            storedEvent = null

           throttledTimeout = setTimeout(() => {
                throttledTimeout = null

                if(storedEvent){
                    throttledEventListener(storedEvent)
                }
            }, delay);
        }
    }

    return throttledEventListener
}

let handleThrottleKeyStroke = throttle(getData, 500)

