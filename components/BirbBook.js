import React, { Component } from "react";
import { Container, Title, Header, Content } from "native-base";
import moment from "moment";
import BirbPost from "./BirbPost";
import ScreenHeader from './ScreenHeader';

const posts = new Array(10).fill(
    {
        title: "Cookin with birb",
        subtitle: "He cook spaghetti",
        likes: 120000,
        comments: 4000,
        thumbnailImage: require("../assets/birdThumb.jpg"),
        mainImage: require("../assets/bird.png"),
        createdAt: new moment(),
    });

class BirbBook extends Component {

    
    render() {
        return (
            <Container>
                <ScreenHeader navigation={this.props.navigation} title={"BirbBook"} />
                <Content>
                    {posts.map((post, index) => (
                        <BirbPost key={index} post={post} />
                    ))}
                </Content>
            </Container>
        );
    }
}

export default BirbBook;
