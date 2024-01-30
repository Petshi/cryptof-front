import React from 'react';
import {Layout} from "antd";
import {AppHeader} from "../header/AppHeader";
import {AppSider} from "../sider/AppSider";
import {AppContent} from "../content/AppContent";
import {AppFooter} from "../footer/AppFooter";

export const AppLayout = () => {
    return (
        <Layout>
            <AppHeader/>
            <Layout>
                <AppSider/>
                <AppContent/>
            </Layout>
            <AppFooter/>
        </Layout>
    );
};