import React from 'react'
import Details from './Details'
import Image from './Image'
import './JobCard.css'
function ListingCard({listing, filtering}) {
    const rules = `bg-white ${listing.featured ? 'featured-item' : ''} max-w-4xl mb-10 shadow-lg p-4 flex justify-center items-center`
    return (
        <div  className='card' style={{borderRadius: 5}}>
           
            <Image url={listing.logo} desc={listing.company} />
            <Details 

                company={listing.company}
                recent={listing.new}
                featured={listing.featured}
                position={listing.position}
                postedAt={listing.postedAt}
                contract={listing.contract}
                location={listing.location}
                languages={listing.languages}
                tools={listing.tools}
                filter_f={filtering}
            />
            <br></br>
            
        </div>
        
    )
}

export default ListingCard
