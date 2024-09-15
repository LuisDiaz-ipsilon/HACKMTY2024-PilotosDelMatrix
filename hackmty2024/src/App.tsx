import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-8 min-h-screen min-w-screen'>
        <div className='col-span-4 row-span-1 bg-indigo-600'>
          <h1 className="text-3xl font-sans">
            Menu
          </h1>
        </div>
        <div className='col-span-4 row-span-7 grid grid-cols-6 grid-rows-6'>
            <div className='col-span-1 row-span-6'/>
            <div className='col-span-5 row-span-1'/>
            <Card/>
        </div>
      </div>
    </>
  )
}

export default App
