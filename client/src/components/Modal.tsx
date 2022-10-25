import React from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
    isShowing: boolean,
    toggle: () => void
    Component: React.ElementType
}


export default function Modal({ isShowing, toggle, Component }: ModalProps) {
    return isShowing ? <>
        <Component toggle={toggle} />
    </> : null

}