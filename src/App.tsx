import React from "react";
import {AppLayout} from "./components/layout/Layout";
import {Flex} from "antd";

export const App: React.FC = () => {


    return (
        <Flex gap="middle" wrap="wrap">
            <AppLayout/>
        </Flex>
    )
}
