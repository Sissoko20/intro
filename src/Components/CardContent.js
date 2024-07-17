import React from 'react';
import { Card, Col, Row} from 'antd';
import { posters } from './datas';
import { plantList } from './plantList';
import {movies} from './movies.js'


const App = () => (
  <Row gutter={16}>
{movies.map(movie=>
 <Col span={8} key={movie.id}>
  
 <Card title={movie.title} bordered={false}
 cover={<img src={movie.poster} alt={'photo'+movie.title}/>}>
   {movie.plot}
   
 </Card>
</Col>

)}
   
    
  
  </Row>
);
export default App;