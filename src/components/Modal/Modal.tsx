import React,{useEffect,useState} from 'react'
import { createPortal } from 'react-dom'

import classes from "./modal.module.css"


const Modal: React.FC<{
    children: React.ReactNode,
    onClose: () => void
}> = (props) => {

    const [mounted,setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false)
        }
    },[])

    return ( mounted ?
    createPortal(
        <>
            <div className = {classes.backdrop} onClick = {props.onClose}>
            </div>
            <div className = {classes.content}>
                <p className = {classes.cross} onClick = {props.onClose}>&#9932;</p>
                {props.children}
            </div>
        </>,
        document.getElementById("modal-root")!):
        null
    )
}

export default Modal