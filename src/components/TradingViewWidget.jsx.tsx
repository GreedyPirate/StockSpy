'use client'
import React, {useRef, memo } from 'react';
import useTradingViewWidget from "@/hooks/useTradingViewWidget";

interface WidgetProps {
    title?: string,
    scriptSuffix: string,
    height?: number,
    config: Record<string, unknown>
}

function TradingViewWidget({title, scriptSuffix, height = 600, config}: WidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useTradingViewWidget(containerRef, scriptSuffix, config)
    return (
        <div className='size-full'>
            {
                title && (
                    <h3 className='font-semibold text-2xl'>{title}</h3>
                )
            }
            <div className="tradingview-widget-container mt-2" ref={containerRef}
                 style={{height: `${height}px`, width: "100%"}}>
            </div>
        </div>
    );
}

export default memo(TradingViewWidget);
