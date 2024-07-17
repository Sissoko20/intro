import React from 'react';
import { Card, Carousel, Col, Row } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
    const products = [
        { title: 'Chou', id: 1 },
        { title: 'Ail', id: 2 },
        { title: 'Pomme', id: 3 },
      ];
    
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
        {products.map(product=>(
            
                <div key={product.id}>
                    <Row gutter={16} justify="center">
                        <Col span={8}>
                        <Card title style={{height:"160px"}}>
                            {product.title}</Card>
                        </Col>
                    </Row>
                </div>
        ))}
    
    
   
     
    </Carousel>
  );
};
export default App;