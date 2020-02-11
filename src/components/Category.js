import React from 'react';
import { Link } from "react-router-dom";
import { Segment, List, Image, Card, Label } from 'semantic-ui-react'
import MainContext from '../context/MainContext';

const Category = () => (
    <MainContext.Consumer>
        {context => (
            <Segment>
                <Card>
                    <Image src={require('../image/2.jpg')} wrapped ui={false}/>
                    {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
                    <Card.Content>
                    <Card.Header>{context.card.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{context.card.meta}</span>
                    </Card.Meta>
                    <Card.Description>
                        {context.card.desc}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Label as='a' color='red' ribbon>
                        {context.card.blogTitle}
                    </Label>
                    <a href="https://marindie.github.io">{context.card.blogDesc}</a>
                    </Card.Content>
                </Card>

                <List animated verticalAlign='middle'>
                    {Object.keys(context.categories).map(key => (
                            <List.Item key={key}>
                                <List.Content>
                                    <Link to={context.link[key]}>
                                        <List.Header >{context.categories[key]}</List.Header>
                                    </Link>
                                </List.Content>
                            </List.Item>
                    ))}
                </List>
            </Segment>
        )}                
    </MainContext.Consumer>    
);

export default Category;