'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HeroImage from './imageHero'
import Description from './description'
import CommentsMedium from './comments/commentsMedium'
import CommentsLarge from './comments/commentsLarge'
import Modal from './modal/commentModal'
import Navbar from '../components/navbar/navbar'

export interface Details {
        _id: string,
        name: string,
        owner: { name: string },
        address: string,
        latlng: { lat: number, lng: number },
        image: string,
        reviews: [{ owner: { name: string }, rating: number, comment: string, _id: string, date: string }],
        createdAt: string,
        avgRating: number
}

export interface Comment {
    owner: { name: string }, 
    rating: number, 
    comment: string, 
    _id: string, 
    date: string 
}


export default function Details() {

    const [details, setDetails] = useState<Details>()
    const [modalOpen, setModalOpen] = useState(false)

    async function getDetails(pathname: string) {
        const response = await axios.get(`https://main--stellular-fenglisu-e2b691.netlify.app/api/restaurant/detail/${pathname}`)
        .then((response) => {
            return response.data
        })
        console.log(response)
        setDetails(response)
    }

    console.log(details)

   useEffect(() => {
    const pathname = window.location.pathname
    getDetails(pathname)
   },[])

    if(details) {
        return(
        <div className='mx-[2vw]'>
            <Navbar />
            {modalOpen ? 
            <div className='fixed top-0 left-0 w-full h-full'>
                <Modal details={details} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </div> 
            :
            <div>
            <HeroImage details={details} />
            <Description details={details} setModalOpen={setModalOpen} />
            <div>
                {details.reviews.map((comment: Comment, index: number) => (
                    <div key={index}>
                        <div className='lg:hidden block'>
                            <CommentsMedium comment={comment} />
                        </div>
                        <div className='lg:block hidden'>
                            <CommentsLarge comment={comment} />
                        </div>
                    </div>
                ))}
            </div>
            </div>
            }
        </div>
    )
    }
}