import AOS from 'aos'
import { useEffect } from 'react'

export const AnimationAOS = () => {
    useEffect(()=> {
        AOS.init({
            once: true,
            duration: 500,
            offset: 250
        })
    }, [])
}