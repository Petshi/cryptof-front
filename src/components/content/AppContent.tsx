import React from 'react';
import {Content} from "antd/es/layout/layout";

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 'calc(100vh - 128px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

export const AppContent = () => {
    return (
        <Content style={contentStyle}>Content</Content>
    );
};