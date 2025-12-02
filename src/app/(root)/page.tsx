'use client'

import TradingViewWidget from "@/components/TradingViewWidget.jsx";
import {
    HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
    TRADING_VIEW_WIDGET_CONFIG
} from "@/lib/Constants";

function Home() {
    return (
        <div className='flex min-h-screen home-wrapper '>
            <section className='grid home-section'>
                <div className='col-span-1 md:col-span-1 xl:col-span-1'>
                    <TradingViewWidget
                        title="Market Overview"
                        scriptSuffix='market-overview.js'
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
                <div className='col-span-1 md:col-span-1 xl:col-span-2'>
                    <TradingViewWidget
                        title="Stock Heatmap"
                        scriptSuffix='stock-heatmap.js'
                        config={HEATMAP_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>

            <section className='grid home-section'>
                <div  className='col-span-1 md:col-span-1 xl:col-span-1'>
                    <TradingViewWidget
                        scriptSuffix='timeline.js'
                        config={TOP_STORIES_WIDGET_CONFIG}
                        height={600}
                    />

                </div>
                <div  className='col-span-1 md:col-span-1 xl:col-span-2'>
                    <TradingViewWidget
                        scriptSuffix='market-quotes.js'
                        config={MARKET_DATA_WIDGET_CONFIG}
                        height={600}
                    />
                </div>
            </section>

        </div>
    );
}

export default Home;