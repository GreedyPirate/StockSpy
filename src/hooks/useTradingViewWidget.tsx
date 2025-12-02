import {RefObject, useEffect} from "react";

const useTradingViewWidget = (ref: RefObject<HTMLDivElement | null>, scriptSuffix:string, config: Record<string, unknown>) => {
    useEffect(() => {
        if(!ref || !ref.current) return;
        if(ref.current.dataset.loaded) return;

        ref.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: 100%"></div>`
        const script = document.createElement("script");
        script.src = `https://s3.tradingview.com/external-embedding/embed-widget-${scriptSuffix}`;
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify(config);
        ref.current.appendChild(script);
        ref.current.dataset.loaded = 'true'
        return () => {
            if(!ref || !ref.current) return;
            ref.current.innerHTML = ''
            delete ref.current.dataset.loaded
        }
    }, [])
}

export default useTradingViewWidget;