import React from 'react';
import './Main.css';
import MainPanel from '../component/component.js'

class Main extends React.Component {
  render() {
    return (
        <div className = 'wrap'>
           <div className = 'layout'>
              <h1>Main Page</h1>
           </div>
           <div className = 'main'>
            <div className = 'geoSelect'>지역을 선택해주세요</div>
            <div className = 'geoRecommendSelect'>추천받고 싶은 지역을 선택하세요</div>
            <MainPanel/>
           </div>
        </div>
    );
  }
}

export default Main;