import React from "react"
import {useRef} from "react"
import {useDraggable} from "react-use-draggable-scroll";

export default function MainPanel() {
    const ref = useRef();
    const {onMouseDown} = useDraggable(ref);
    return (
        <div ref = {ref} onMouseDown = {onMouseDown} className = 'mainPanel'>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>
            <div className = 'Panel'></div>

        </div>
    )
    
}
