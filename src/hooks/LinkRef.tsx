'use client'
import {useEffect, useRef} from "react";

const useLinkRef = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(!ref.current) return;
        ref.current.innerHTML = '<p>哈哈哈哈哈哈</p>'
    }, [])
    return ref
}
export default useLinkRef
