import React, { Component } from "react";
import { Container, Title, Header, Content } from "native-base";
import moment from "moment";
import BirbPost from "./BirbPost";

const posts = [
    {
        title: "Cookin with birb",
        subtitle: "He cook spaghetti",
        likes: 120000,
        comments: 4000,
        thumbnailImage: require("../assets/birdThumb.jpg"),
        mainImage: require("../assets/bird.png"),
        createdAt: new moment(),
    },
    {
        title: "Cookin with birb",
        subtitle: "He cook spaghetti",
        likes: 120000,
        comments: 400,
        thumbnailImage: require("../assets/birdThumb.jpg"),
        mainImage: require("../assets/bird.png"),
        createdAt: new moment(),
    },
];

class BirbBook extends Component {

    
    render() {
        return (
            <Container>
                <Header>
                    <Title
                        style={{ width: "100%", textAlignVertical: "center" }}
                    >
                        BirdBook
                    </Title>
                </Header>
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
