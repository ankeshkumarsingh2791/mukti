import React from 'react';
import { Carousel } from 'antd';
import CardHome1 from '../Cards/CardHome1';
const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Crousel = () => (
  <Carousel autoplay>
    <div>
     <CardHome1 link={'https://site.wstatic.net/blog/wp-content/uploads/2022/10/Voice_Search_Optimization.jpg'} />
    </div>
    <div>
      <CardHome1 
      description={"Join the fight against Drug Trafficking/peddling and report drug related  issue through Mukti App"}
      text={"Your Identity Will Remain Confidential and All the information will be promptly reviewed by narcotics control bureau "}
      link={'https://recovered.sfo3.cdn.digitaloceanspaces.com/media/15988/conversions/Drug-Trafficking-Laws-guide-detail.jpg?v=1722504620'} />
    </div>
    <div>
      <CardHome1 link={"https://midlandhealthcare.org/wp-content/uploads/2019/09/blood-donations-camp-midland-healthcare-lucknow-768x437.jpg"} />
    </div>
    <div>
      <CardHome1 link={"https://project.ndl.gov.in/wp-content/uploads/2024/08/idr-700x390.jpg"} />
    </div>
    <div>
      <CardHome1 link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdTqpyPaPf4ysKWkZZwMMD3yZpOv9zbCjzA&s"} />
    </div>
    <div>
        <CardHome1 link={""} />
    </div>
  </Carousel>
);
export default Crousel;