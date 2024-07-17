import React from 'react';
import { Card, Col, Row } from 'antd';
const products = [
    { title: 'Chou', id: 1 },
    { title: 'Ail', id: 2 },
    { title: 'Pomme', id: 3 },
  ];

const ProductList = () => (


  <Row gutter={16}>
    {products.map(product=>(
          <Col span={8} key={product.id}>
          <Card title={product.title} bordered={false}>
         
          </Card>
        </Col>

    ))}
  
 
  </Row>
);
export default ProductList;