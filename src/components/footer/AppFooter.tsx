import React from 'react';
import {Footer} from "antd/es/layout/layout";

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    height: 64,
};

export const AppFooter: React.FC = () => {
    return (
        <Footer style={footerStyle}>Footer</Footer>
    );
};
