import React from "react";
import styles from "./App.module.css";
import { Header, Footer,Carousel,SideMenu } from "./components";
import {Row,Col} from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/* 页面内容 content*/}
      <div className={styles['page-content']}>
       {/* 行布局Row,用内联样式给row加上margin top,以1：3比例配置列布局 */}
       <Row style={{marginTop: 20}}>
        <Col span={6}>
        <SideMenu />
        </Col>
        <Col span={18}>
        <Carousel />
        </Col>
       </Row>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
