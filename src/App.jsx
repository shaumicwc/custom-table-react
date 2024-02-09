import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [title, setTitle] = useState(true);
  const [categories, setCategories] = useState(true);
  const [price, setPrice] = useState(true);
  const [date, setDate] = useState(true);
  const [author, setAuthor] = useState(true);
  const [status, setStatus] = useState(true);
  const [action, setAction] = useState(true);


  // data fetching function
  const fetchData = async () => {
    fetch('/data.json')
      .then((response) => response.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

// form submit function
  const handleSubmit = async (event) => {
    event.preventDefault();

    setShowFilter(false)
  }

  return (
    <>
      <div className=' w-full relative'>

        <div className="w-[1100px] flex flex-col justify-center items-center md:mx-16">
          <div className='w-[1000px] flex flex-row justify-between items-center m-5 border-b-2 border-gray-600 py-3'>
            <p className='text-2xl font-bold'>Custom Table</p>
            <button
            className='text-lg font-semibold cursor-pointer text-black bg-gray-400 rounded-md px-3 py-2' 
            onClick={() => setShowFilter(true)}
            >Filter</button>
          </div>

          {/* table */}

              <div className='w-[1000px] flex flex-row justify-between items-start py-2 border-b-2 border-gray-500'>
                <p className={`text-lg font-bold ${title ? '' : 'hidden'}`}>Title</p>
                <p className={`text-lg font-bold ${categories ? '' : 'hidden'}`}>Categories</p>
                <p className={`text-lg font-bold ${price ? '' : 'hidden'}`}>Price</p>
                <p className={`text-lg font-bold ${date ? '' : 'hidden'}`}>Date</p>
                <p className={`text-lg font-bold ${author ? '' : 'hidden'}`}>Author</p>
                <p className={`text-lg font-bold ${status ? '' : 'hidden'}`}>Status</p>
                <p className={`text-lg font-bold ${action ? '' : 'hidden'}`}>Action</p>
              </div>
              {
                data.map((item, index) => {
                  return (
                    <div key={index} className='w-[1000px] flex flex-row justify-between items-center pt-1' >
                      <p className={` ${title ? '' : 'hidden'} w-1/3`}>{item.title}</p>
                      <p className={` w-1/3 ${categories ? '' : 'hidden'}`}>{item.categories.join(', ')}</p>
                      <p className={` w-1/3 font-semibold ${price ? '' : 'hidden'}`}>{item.price} BDT</p>
                      <p className={` w-1/3 ${date ? '' : 'hidden'}`}>{item.date}</p>
                      <p className={` w-1/3 ${author? '' : 'hidden'}`}>{item.author}</p>
                      <p className={` w-1/3 text-green-500 font-semibold ${status ? '' : 'hidden'}`}>{item.status}</p>
                      <p className={` ${action ? '' : 'hidden'} `}>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                      </p>
                    </div>
                  );
                })
              }
        </div>
      </div>


              {/* filter div */}
      {
        showFilter && <form onSubmit={handleSubmit} className='w-1/4 absolute top-10 right-10 flex flex-col justify-start items-start space-y-8 p-7 bg-gray-200 shadow-2xl'>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={title ? true : false} name='title' className='w-[15px] h-[15px]' onClick={() => setTitle(!title)} />
            <label className='text-xl font-semibold'>Title</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={categories ? true : false} onClick={() => setCategories(!categories)} name='categories' className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Categories</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" name='price' checked={price ? true : false} onClick={() => setPrice(!price)} className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Price</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={date ? true : false} onClick={() => setDate(!date)} name='date' className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Date</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={author ? true : false} onClick={() => setAuthor(!author)} name='author' className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Author</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={status ? true : false} onClick={() => setStatus(!status)} name='status' className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Status</label>
          </div>
          <div className='w-full flex flex-row items-center space-x-3 justify-start'>
            <input type="checkbox" checked={action ? true : false} onClick={() => setAction(!action)} name='action' className='w-[15px] h-[15px]' />
            <label className='text-xl font-semibold'>Action</label>
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </form>
      }
    </>
  )
}

export default App
