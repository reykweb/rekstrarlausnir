import React, {  useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader'
import { listProductDetails } from '../action/productAction';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() =>{
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match])

  return (
    <>
      <Link className="btn btn-light my-3" to='/'>Til baka</Link>
       { loading ? (
      <Loader />
       ) : error ? (  <Message variant='danger' >{error}</Message>
       ) : (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup varian='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={` ${product.numReviews} álit`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Verð: kr {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Verð:
                  </Col>
                  <Col>
                    <strong>kr {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Staða:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'Til á lager' : 'Uppselt'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type='button' disabled={product.countInStock === 0} >Bæta í körfu</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
    </>
  )
}

export default ProductScreen
