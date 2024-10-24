import './searchbar.css'

export default function Searchbar() {
    return (
        <>
            <form method='get' action="https://www.google.com/search?">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"/>
                <div className='Search-bar'>
                    <input type="text" className='Search-input' placeholder='Search on Google...' name='q'/>
                    <button className='Search-submit'>
                        <i className='fa-solid fa-magnifying-glass'>
                            <span className="Search-icon material-symbols-outlined">search</span>
                        </i>
                    </button>
                </div>
            </form>
        </>
    )
}