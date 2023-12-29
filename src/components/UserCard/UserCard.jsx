import React from 'react'
import './UserCard.scss'

const UserCard = (props) => {

    const { data } = props

    return (
        <div className='userCardContainer'>
            <div className='userCard'>
                <div className='profilePictureWrapper'>
                    <img className='profilePicture' src={data.avatar_url} alt='profilePicture' />
                </div>
                <h1 className='profileName'><a href={data.html_url} target='_blank'>{data.login}</a></h1>
                <p className='profileDescription'>{data.bio || "No Bio"}</p>

                <ul className='infoList'>
                    <li>
                        <div className='infoContainer'>
                            <p className='value'>{data.followers}</p>
                            <p className='type'>Follower</p>
                        </div>
                    </li>
                    <li>
                        <div className='infoContainer'>
                            <p className='value'>{data.following}</p>
                            <p className='type'>Following</p>
                        </div>
                    </li>
                    <li>
                        <div className='infoContainer'>
                            <p className='value'>{data.public_gists}</p>
                            <p className='type'>Gists</p>
                        </div>
                    </li>
                    <li>
                        <div className='infoContainer'>
                            <p className='value'>{data.public_repos}</p>
                            <p className='type'>Repos</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserCard