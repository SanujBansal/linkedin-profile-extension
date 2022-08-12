import { Col, Row } from 'antd';
import React from 'react';
import styles from './info.module.css';

const Info = () => {
  return (
    <div className={styles.padding}>
      <div className={styles.header}>
        <Row className={styles.heading} span={24}>
          FAANGPath
        </Row>
      </div>
      <div className={styles.linkedIn_Review}>
        <Row>
          <Col>LinkedIn Review</Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col className={styles.info_text}>
            Your LinkedIn profile is a key piece of your professional brand and
            identity. We’ve gone ahead and analyzed your profile page and here’s
            what we found:
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Info;
