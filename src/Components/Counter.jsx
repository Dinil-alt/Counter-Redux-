import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'

function Counter() {
  const [amount,setAmount] = useState("")
  const dispatch = useDispatch()
  const handleIncrement=()=>{
    if(amount==""){
      alert("please provide a value")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
    }
  }
  const count = useSelector((state)=>state.counter.count)
  return (
    <div style={{height:'70vh'}} className='w-100 justify-content-center d-flex align-items-center'>
        <div className='d-flex justify-content-center d-flex align-items-center border border-white rounded p-5 w-25 flex-column'>
            <h1 style={{fontSize:'150px',fontWeight:'700',color:'blue'}}>{count}</h1>
            <div className='d-flex justify-content-between '>
                <div className='btn btn-success w-50 tex' onClick={()=>dispatch(increment())}>Increment</div>
                <div className='btn btn-danger w-50 ms-2 tex' onClick={()=>dispatch(decrement())}>Decrement</div>
                <div className='btn btn-warning w-50 ms-2 tex' onClick={()=>dispatch(reset())}>Reset</div>
        </div>
        <div className='tex d-flex mt-3'>
          <input type="text" className='textfield form-control me-2' placeholder='Enter a value for increment' onChange={e=>setAmount(e.target.value)}/>
          <button onClick={handleIncrement} className='btn btn-info'>Increment</button>
        </div>
        </div>
    </div>
  )
}

export default Counter