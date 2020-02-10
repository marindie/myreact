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
                    <Card.Header>정승원 (Patrick)</Card.Header>
                    <Card.Meta>
                        <span className='date'>다 이루어 져라</span>
                    </Card.Meta>
                    <Card.Description>
                        내가 하는 일들이 쉬워지는 그날 까지..ㅋ
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Label as='a' color='red' ribbon>
                        My Blog
                    </Label>
                    <a href="https://marindie.github.io">긍정 코딩 꿈나무</a>
                    </Card.Content>
                </Card>

                <List animated verticalAlign='middle'>
                    {Object.keys(context.categories).map(key => (
                            <List.Item>
                                <List.Content>
                                    <Link to="/image">
                                        <List.Header as='a'>{context.categories[key]}</List.Header>
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