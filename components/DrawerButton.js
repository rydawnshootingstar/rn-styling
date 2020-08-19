import React from 'react'
import {Button, Text, Icon} from 'native-base'

const DrawerButton = ({navigation})=> (
    <Button style={{marginLeft: 50, marginRight: 10}} onPress={()=> navigation.openDrawer()}>
        <Icon style={{fontSize: 50}} name="menu" />
    </Button>
)

export default DrawerButton;