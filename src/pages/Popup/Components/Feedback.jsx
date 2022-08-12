import React from 'react';
import { Alert, List } from 'antd';
import styles from './Feedback.module.css';

const Feedback = () => {
  const data = [
    {
      name: 'Profile Picture',
    },
    {
      name: 'Banner',
    },
    {
      name: 'LinkedIn Url',
    },
    {
      name: 'Headline',
    },
    {
      name: 'About',
    },
    {
      name: 'Experience',
    },
    {
      name: 'Skills',
    },
  ];
  return (
    <div>
      <div className={styles.alert}>
        <Alert
          description="We’ve found 5 areas of improvement for your profile!"
          type="info"
        />
      </div>
      <div
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <List
          dataSource={data}
          renderItem={(item, i) => (
            <List.Item key={i}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.name}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Feedback;
