import { useAuthContext } from '../context/AuthContext'

interface ModalProps {
    isShowing: boolean,
    toggle: () => void
    Component: React.ElementType
}


export default function Modal({ isShowing, toggle, Component }: ModalProps) {

    const { user } = useAuthContext();

    return (isShowing && !user) ? <>
        <Component toggle={toggle} />
    </> : null

}