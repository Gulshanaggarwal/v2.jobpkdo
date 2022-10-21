import { FaTwitter, FaGithub } from 'react-icons/fa'


const iconStyle = {
    color: '#F5F5F5',
    fontSize: '2rem'
}

export default function Footer() {
    return (
        <footer className='pt-16 px-5 bg-black-main'>
            <h1 className='font-extrabold text-grey-main'>JOBPKDO</h1>
            <div className='flex py-8 space-x-6'>
                <a href=''>
                    <FaGithub style={iconStyle} />
                </a>
                <a href='https://github.com/Gulshanaggarwal/v2.jobpkdo'>
                    <FaTwitter style={iconStyle} />
                </a>
            </div>
            <p className='text-grey-main text-center py-1'>Made with ❤ by <a className='underline' href='https://twitter.com/gulshanagg333'>Gulshan Aggarwal</a></p>
        </footer>
    )
}