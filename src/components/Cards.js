import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>CAST</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem 
                    src = {require('../images/jordan.jpg').default}
                    text='Michael Jordan'
                    path='/services'
                    
                    />
                    <CardItem 
                    src = {require('../images/rodman.jpg').default}
                    text='Denis Rodman'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/pippen.jpg').default}
                    text='Scottie Pippen'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/philjackson.jpg').default}
                    text='Phil Jackson'
                    
                    path='/services'
                    />
                    
                    
                    </ul>
                    <ul className='cards__items'>
                    
                    <CardItem 
                    src = {require('../images/isiahthomas.jpg').default}
                    text='Isiah Thomas'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/charlesbarkley.jpg').default}
                    text='Charles Barkley'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/jerry.jpg').default}
                    text='Jerry Reinsdorf'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/magicjohnson.jpg').default}
                    text='Magic Johnson'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/ewing.jpg').default}
                    text='Patrick Ewing'
                    
                    path='/services'
                    />
                    </ul>
                    <ul className='cards__items'>
                    <CardItem 
                    src = {require('../images/stevekerr.jpg').default}
                    text='Steve Kerr'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/salley.jpg').default}
                    text='John Salley'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/riley.jpg').default}
                    text='Pat Riley'
                    
                    path='/services'
                    />
                    <CardItem 
                    src = {require('../images/electra.jpg').default}
                    text='Carmen Electra'
                    
                    path='/services'
                    />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
