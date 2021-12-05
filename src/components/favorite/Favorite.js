import React from 'react'
import './favorite.scss'

export default function Favorite(props) {
    const {favoriteList} = props;

    return ( <>
        <div className="favorite-container">
            <h1>
                {favoriteList}
            </h1>
        </div>
    </>);
}