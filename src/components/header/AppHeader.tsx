import React from 'react';
import {Header} from "antd/es/layout/layout";

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

export const AppHeader = () => {
    return (
        <Header style={headerStyle}>Header</Header>
    );
};
