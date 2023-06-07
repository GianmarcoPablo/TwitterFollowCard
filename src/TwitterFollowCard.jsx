import { useState } from "react"

const TwitterFollowCard = ({userName,children,initialIsFollowing}) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                src={`https://unavatar.io/${userName}`}
                alt="El avatar De miduDev"
                className='tw-followCard-avatar'
            />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button 
                className={buttonClassName}
                onClick={handleClick}    
            >
                {text}
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard