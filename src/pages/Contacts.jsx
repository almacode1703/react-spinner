import React from 'react'

function Contacts() {
  return (
    <div>
        <form action="" className='border-2'>
            <div>
                <label htmlFor="">First Name</label><br />
                <input type="text" name="" id="" className='border-1' />
            </div>
            <div>
                <label htmlFor="">Last Name Name</label><br />
                <input type="text" name="" id="" className='border-1' />
            </div>
            <div>
                <label htmlFor="">Email</label><br />
                <input type="email" name="" id="" className='border-1' />
            </div>
            <input type="submit" value="Submit" className='p-2 bg-blue-600' />
        </form>
    </div>
  )
}

export default Contacts
