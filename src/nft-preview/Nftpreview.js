import React from 'react'

const Nftpreview = () => {
  return (
    <div className="container mt-0 mx-auto mb-4 p-5 bg-cardbg rounded-lg">
        <article>
            <img className='max-w-full' src={require("../assets/images/image-equilibrium.jpg")} alt="" />
        </article>

        <article>
            <h2 className='mt-4 mr-2 mb-2 ml-0'>Equillibrium #3429</h2>
            <p className='opacity-60'>
                Our Equillibrium collection promotes balance and calm.
            </p>

            <ul className='flex items-center justify-between py-8 px-0 border-b-2 border-line '>
                <li className='flex align-center text-cyan'> <img className='max-w-full mr-2' src={require("../assets/images/icon-ethereum.svg").default} alt="" /> 0.041 ETH</li>
                <li className='flex align-center opacity-60'> <img className='max-w-full mr-2' src={require("../assets/images/icon-clock.svg").default} alt="" /> 3 days left</li>
            </ul>
        </article>

        <article className='flex align-center justify-start pt-8'>
            <img className='max-w-full w-16 border-2 rounded-full mr-4' src={require("../assets/images/image-avatar.png")} alt="" />
            <p><span className='opacity-60'>Creation of</span> Jules Wyvern</p>
        </article>
    </div>
  )
}

export default Nftpreview;