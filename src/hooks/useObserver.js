import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, canObserve, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading || canObserve) return;
        if (observer.current) observer.current.disconnect();
        const cb = function(entries, observer){
            if(entries[0].isIntersecting && canLoad){
                callback();
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading]);
}