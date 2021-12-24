import './intro.scss'

import {init} from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
   
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor:false,
            backDelay:1500,
            strings: ["Azure", "DevOps", "O365"]
        })
    }, [])


    return (
        <div className='intro'>
            <div className='left'>
<div className='imgContainer' >
    <img src='/assets/intro.svg'></img>
</div>

            </div>
            <div className='right'>

                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Pramod NAIK</h1>
                    <h3> Expertise <span> in </span>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='#portfolio'>
                    <img src=""></img>
                </a>
            </div>
        </div>
    )
}
