import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Embed from 'react-embed'
import { Link } from 'react-router-dom'
import apiMeme from '../components/services/apiMeme'

const ListagemMeme = () => {

    const [memes, setMemes] = useState([])

    useEffect(() => {
        apiMeme.get('/get_memes').then(resultado => {
            setMemes(resultado.data.data.memes);
        })
    }, [])

    return (
        <div>
            <h1 className='mt-5'>Us Meme's</h1>
           

            <Row>
                {memes.map(item => (
                    <Col key={item.id} md={3} className='mb-3'>
                        <Card className='h-100' border='secondary'>
                            <Card.Img title={item.name} variant='top' src={item.url} />
                            <Card.Body>
                                <Card.Title> <strong>Nomezinn: </strong>{item.name}</Card.Title>
                                <a className='btn btn-warning' target="_blank" href={item.url}> Veja 👀 </a>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ListagemMeme