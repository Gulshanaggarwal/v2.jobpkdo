import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa"

export default function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
            return;
        }
        setVisible(false)

    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => window.removeEventListener('scroll', toggleVisible);
    }, [])


    return visible ? (
        <div className={`fixed bottom-4 right-3 bg-violet-main shadow-inner rounded-full p-3 cursor-pointer`} onClick={handleScroll}>
            <FaAngleUp style={{ color: '#F5F5F5', fontSize: '1.5rem' }} />
        </div>
    ) : null

}