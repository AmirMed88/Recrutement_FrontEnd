import { Container } from '@material-ui/core'
import React from 'react'
import Details from './Details'
import Image from './Image'
import './JobCard.css'
function ListingCard({listing, filtering}) {
    const rules = `bg-white ${listing.featured ? 'featured-item' : ''} max-w-4xl mb-10 shadow-lg p-4 flex justify-center items-center`
    return (
        <div  className='card' style={{borderRadius: 5,display:'flex',alignItems:'flex-end',margin:'10'}}>
           <Container className='cont'>
           {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
           <Image className='image' url={listing.logo} desc={listing.company} />
            <Details className='detail'

                id={listing.id}
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
            
           </Container>
           {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            
        </div>
        
    )
}

export default ListingCard
