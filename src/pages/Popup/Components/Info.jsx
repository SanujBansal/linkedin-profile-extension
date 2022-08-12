import { MenuFoldOutlined } from '@ant-design/icons';
import { Col, Row, Menu, Dropdown, Space } from 'antd';
import React from 'react';
import styles from './info.module.css';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const Info = () => {
  return (
    <>
      <div className={styles.header}>
        <Row className={styles.heading} span={24}>
          <Col span={16}>FAANGPath</Col>
          <Col span={8}>
            <Space>
              <Dropdown overlay={menu} placement="bottomRight">
                <MenuFoldOutlined />
              </Dropdown>
            </Space>
          </Col>
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
    </>
  );
};

export default Info;
