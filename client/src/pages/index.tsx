import type { NextPage } from 'next'
import Header from '../components/Header/header'
import { FaTwitter, FaGithub, FaSistrix, FaRegBookmark, FaRegCheckCircle, FaRegBell, FaRegCommentAlt } from 'react-icons/fa'
import { BiShareAlt } from 'react-icons/bi'
import Image from 'next/image'
import Modal from '../components/Modal'
import SignIn from '../components/Signin'
import useModal from '../hooks/useModal'

const iconStyle = {
  color: '#F5F5F5',
  fontSize: '2rem'
}

const Home: NextPage = () => {

  const { isShowing, toggle } = useModal();


  return (
    <div>
      <main className='px-5 py-8'>
        <div className='flex justify-center items-center bg-grey-secondary rounded-full w-1/2 mx-auto p-2 space-x-2'>
          <FaTwitter style={{ color: '#1DA1F2' }} />
          <span className='text-xs text-twitter font-bold'>Introducing Jobpkdo</span>
        </div>
        <div className='text-2xl text-center font-extrabold py-8'>
          <p className='text-black-main'>Now Grab the Job that <br />Comes through</p>
          <span className='text-transparent bg-clip-text bg-gradient-to-b from-orange-main to-violet-main'>Twitter</span>
        </div>
        <p className='text-black-secondary text-center text-xs'>
          <span className='font-bold'>Search, Save, Share &nbsp;</span>
          and get <span className='font-bold'>notified</span><br />
          for the jobs you love.
        </p>
        <div className='flex justify-around  pt-16 pb-4'>
          <button className='bg-violet-main rounded-full text-white px-4 py-1' type='button' onClick={toggle}>Get Started</button>
          <a className='flex items-center px-2 py-1 rounded-full border-2 border-grey-secondary' href='https://github.com/Gulshanaggarwal/v2.jobpkdo'>
            <FaGithub />
            <span className='px-1'>Star on Github</span>
          </a>
        </div>
        <Modal isShowing={isShowing} toggle={toggle} Component={SignIn} />
      </main>
      {/*--- Features section---- */}
      <section className='bg-grey-tertiary py-16 px-5'>
        <h2 className='font-extrabold text-orange-main text-center text-2xl py-2'>Features we offer! 🤩</h2>
        <div>
          <div className='py-12'>
            <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main mx-auto'>
              <FaSistrix style={iconStyle} />
            </div>
            <p className='text-black-secondary text-center py-4 px-4'>
              Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main mx-auto'>
              <FaRegBookmark style={iconStyle} />
            </div>
            <p className='text-black-secondary text-center py-4 px-4'>
              Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main mx-auto'>
              <FaRegCheckCircle style={iconStyle} />
            </div>
            <p className='text-black-secondary text-center py-4 px-4'>
              Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main mx-auto'>
              <BiShareAlt style={iconStyle} />
            </div>
            <p className='text-black-secondary text-center py-4 px-4'>
              Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main mx-auto'>
              <FaRegBell style={iconStyle} />
            </div>
            <p className='text-black-secondary text-center py-4 px-4'>
              Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
            </p>
          </div>
        </div>
      </section>
      {/*--- Advanced feature---- */}
      <section className='py-16 px-5'>
        <h2 className='font-extrabold text-orange-main text-2xl py-8'>Advanced feature! ✨</h2>
        <Image src='/Reply_Demo.png' alt='reply-image' width={330} height={300} />
        <div className='py-12'>
          <div className='flex justify-center items-center rounded-full w-24 h-24 bg-gradient-to-b from-orange-main to-violet-main'>
            <FaRegCommentAlt style={iconStyle} />
          </div>
          <p className='text-black-main font-bold pt-6'>Reply to the Tweet</p>
          <p className='text-black-secondary py-4'>
            Around 7 million blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.
          </p>
        </div>
      </section>
    </div>
  )

}

export default Home
