import React from "react";
import { Image } from "react-native";
import NumberFormat from "react-number-format";
import moment from "moment";
import {
    Icon,
    Button,
    Text,
    Card,
    CardItem,
    Thumbnail,
    Left,
    Body,
    Right,
} from "native-base";

const BirbPost = (props) => {
    const {
        title,
        subtitle,
        thumbnailImage,
        mainImage,
        likes,
        comments,
        createdAt,
    } = props.post;

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={thumbnailImage} />
                    <Body>
                        <Text>{`${title}`}</Text>
                        <Text note>{`${subtitle}`}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={mainImage}
                    style={{ width: "100%", height: 300 }}
                />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name='thumbs-up' />
                        <NumberFormat
                                suffix={" Likes"}
                                displayType={"text"}
                                thousandSeparator
                                value={likes}
                                renderText={value=> (
                                <Text>{value}</Text>
                                )}
                            />
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name='chatbubbles' />
                        <Text>{`${comments} Comments`}</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>{`${moment(createdAt).fromNow()}`}</Text>
                </Right>
            </CardItem>
        </Card>
    );
};

export default BirbPost;
