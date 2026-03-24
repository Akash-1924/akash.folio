
import NavBar from './components/NavBar'
import './index.css'

export default function App() {
  return (
    <>
    <NavBar />
    <div className='container pt-20 text-white flex justify-between mx-auto'>
      <div className='w-16 rounded-full bg-gray-500 mb-4'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Akash.folio</h1>
      </div>
      <div className='w-32 h-1 bg-gray-500 mb-4'>
      <p className='text-lg'>This is a portfolio website built with React and Tailwind CSS.</p>
      </div>
    </div>s
    </>
  )
} 