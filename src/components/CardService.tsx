import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface CardProps {
    title : string;
}

const CardService: React.FC<CardProps>  = ({title}) => {
    return (
        <div className="h-24 rounded-lg border flex items-center px-5 justify-between cursor-pointer hover:bg-primary hover:text-white shadow ">
            <p className='text-sm font-semibold'>{title}</p>
            <FontAwesomeIcon 
                icon={faArrowRight}
            />
        </div>
    )
}

export default CardService
