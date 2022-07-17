import React from 'react'
import './styles.css'

export interface Props {
    title: string,
    subtitle: string,
    tags: string[],
    image: string,
}

const Details: React.FC<Props> = ({
    title,
    subtitle,
    tags,
    image,}) => {
    return (<div className={'frame'}>
        <img alt='product image' src={image} className={'image'}></img>
        <div className={'title'}>{title}</div>
        <div className={'subtitle'}>{subtitle}</div>
        <div className={'tags'}>
            {tags && tags.map((tag) => <div className={'tag'}>{tag}</div>)}
        </div>
    </div>)
}

export default Details
