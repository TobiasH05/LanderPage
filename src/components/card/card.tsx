import './card.css'

interface CardProps {
    page: string;
    link: string;
}

export default function Card({ page, link }: CardProps) {
    return(
        <>
            <a href={link} className='Card'>
                {page}
            </a>
        </>
    )
}