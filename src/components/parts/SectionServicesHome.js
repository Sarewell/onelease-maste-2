import React from 'react'
import { CardServiceData } from '../data/CardServiceData'
import ButtonParts from '../button/ButtonParts'

export default function SectionServicesHome() {
  return (
    <div className='my-10'>
        <div>
            <h2 className='text-4xl text-purple-800 flex uppercase'>nos services <hr className='h-1 bg-purple-800 w-48 ' /></h2>
            <p className='text-2xl text-violet-900'>QUI RÉPONDENT  À <span className='text-indigo-400'>VOS BESOINS</span></p>
        </div>
        <div className=' grid justify-center grid-cols-2 flex-wrap gap-20 m-10 mx-72 lg:block lg:text-center lg:mx-10 '>
           {CardServiceData.map((item) => (
					<div key={item.id} className='bg-gradient-to-r from-purple-800 to-purple-900 text-white p-6 rounded-3xl w-full h-72 my-4'>
                        <div className='flex space-x-6'>
                            <img src={item.urlimg} alt="" />
                            <div className=''>
                                <h3 className='text-2xl font-bold'>{item.title}</h3>
                                <p className='text-xl'>{item.Subtitle}</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p>{item.content}</p>
                        </div>
                    </div>
				))} 
                
        </div>
        <hr className='w-52 mx-auto h-1 bg-violet-900'/>
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-4xl text-purple-900 font-bold' >ONE LEASE CONNECT</h2>
                <p className='text-2xl text-violet-900 font-bold'>LA DIGITALISATION AU SERVICE DE <span className='text-indigo-400'>VOTRE FLOTTE !</span></p>
                <p className='text-2xl mt-10'>Suivi de commande & livraison, historique d'entretien, déclaration de sinistre, consommations <br /> carburant, documents et bien plus encore...</p>
            </div>
            <div className='flex justify-center mt-10 lg:block lg:text-center lg:mx-auto'>
                <div>
                        <img src="/img-one-lease/home/Sans titre (4)_edited.webp" alt="" />
                    <div className='flex gap-3 justify-center m-6'>
                        <img src="/img-one-lease/home/app store.webp" alt="" />
                        <img src="/img-one-lease/home/Logo-disponible-Google-Play.webp" alt="" />
                    </div>
                </div>
                
                <div>
                    <p className='text-4xl pl-20 pt-20 text-purple-800'>L'APP SUR MESURE<br />pour vos conducteurs</p>
                    <img src="/img-one-lease/home/fleche-courbee_edited.webp" alt=""className='mt-2' />
                    {/* <button className='ml-52 text-4xl uppercase px-14 py-4 bg-purple-800 text-white rounded-lg shadow-xl'>en savoir +</button> */}
                    <ButtonParts 
                        title='en savoir +'
                        />
                </div>
            </div>
        </div>
    </div>
  )
}
