import React from 'react'
import {CardContainer, CardTitle, CardBody} from './CardElements'

const Card = ({title = "Jejeje", body}) => {


    return (
        <>
        <CardContainer>
            <CardTitle>{title}</CardTitle>   
            <CardBody>{body}</CardBody>
        </CardContainer>
        </>
    )
}

export default Card

