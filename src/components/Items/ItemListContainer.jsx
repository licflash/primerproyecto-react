import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../../Hooks/useFetch';

const ItemListContainer = () => {
    const [items] = useFetch(["https://api.escuelajs.co/api/v1/products"])
 
    return (
        <Container>
            <Row>
                {
                    items !== null &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer