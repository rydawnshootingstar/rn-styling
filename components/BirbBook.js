import React, {Component} from 'react';
import {Image} from 'react-native';
import { Container, Title, Header, Icon, Content, Button, Text, Card, CardItem, Thumbnail, Left, Body, Right  } from 'native-base';    

class BirbBook extends Component{
    render(){
        return(
         <Container>
             <Header>
                 <Title style={{width: '100%', textAlignVertical: 'center'}}>BirdBook</Title>
                 </Header>
             <Content>
                 <Card>
                     <CardItem>
                         <Left>
                             <Thumbnail source={ require('../assets/birdThumb.jpg')} />
                             <Body>
                                 <Text>Cookin with birb</Text>
                                 <Text note>He cook spaghetti</Text>
                             </Body>
                         </Left>
                     </CardItem>
                     <CardItem cardBody>
                        <Image source={require('../assets/bird.png')} style={{width: '100%', height: 300}}/>
                     </CardItem>
                     <CardItem>
                         <Left>
                             <Button transparent>
                                 <Icon active name="thumbs-up" />
                                 <Text>120,000 Likes</Text>
                             </Button>
                         </Left>
                         <Body>
                             <Button transparent>
                                 <Icon active name="chatbubbles" />
                                 <Text>400 Comments</Text>
                             </Button>
                         </Body>
                         <Right>
                             <Text>11h ago</Text>
                         </Right>
                         </CardItem>
                 </Card>
             </Content>
         </Container>
        )
    }
}


export default BirbBook;