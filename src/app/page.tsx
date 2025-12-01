'use client'
import {Button} from "@/components/ui/button";

function Home() {
    return (
        <div className='size-full flex justify-center items-center'>
            <Button onClick={()=> console.log('click ....')}>测试点击</Button>
        </div>
    );
}

export default Home;