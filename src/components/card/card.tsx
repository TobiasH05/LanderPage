import './card.css'

interface CardProps {
    name: string;
    link: string;
}

export default function Card({ name, link }: CardProps) {
    return(
        <>
            <a href={link} className='Card'>
                {name}
            </a>
        </>
    )
}