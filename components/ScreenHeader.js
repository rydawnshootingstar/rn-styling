import React from 'react';
import DrawerButton from "./DrawerButton";
import { Header, Title } from "native-base";

const ScreenHeader = ({title, navigation}) => (
    <Header>
        <DrawerButton navigation={navigation} />
        <Title style={{ width: "100%", textAlignVertical: "center" }}>
            {title}
        </Title>
    </Header>
);

export default ScreenHeader;