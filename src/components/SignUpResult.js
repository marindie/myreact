import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Segment, Message, Image, Header } from 'semantic-ui-react'

class SignUpResult extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.location.state
    }   
   
    render() {
        const { firstNm, lastNm } = this.state  
        if(firstNm && lastNm){
            var message = <Message positive>
                        <Message.Header>New Account Created For {firstNm} {lastNm}</Message.Header>
                        <Link to='/'><p>Go to main page</p></Link>
                    </Message>
        }
        return (
            <Grid>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <Segment padded='very'>
                            <Header as='h2' color='teal' textAlign='center'>
                            <Image src={require('../image/logo.png')} size='big' />Account Created
                            </Header>
                            {message}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )

    }

}    

export default SignUpResult;