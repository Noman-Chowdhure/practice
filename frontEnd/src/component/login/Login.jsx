import React from 'react'


const Login = () => {
  const formHandle = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let obje = {name,email};
    fetch('http://localhost:3000/user',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obje)
    })
    .then(res => res.json())
    .then(info => console.log(info))
  }
  return (
    <div >
      <form onSubmit={formHandle} className=''>
        <input className=' grid grid-cols-1 mt-5 ps-4 border-b-[1px] border-zinc-600 outline-none' type="text" placeholder='enter your name here..' name='name' id='name' />
        <input className=' grid grid-cols-1 mt-5 ps-4 border-b-[1px] border-zinc-600 outline-none' type="email" name="email" id="email" placeholder=' enter your email here..' />
        <input type="submit" className=' border-[1px] px-4 mt-4'/>
      </form>
    </div>
  )
}

export default Login
