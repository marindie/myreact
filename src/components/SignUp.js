import React from 'react';
// import { Link } from "react-router-dom";
import { Grid, Segment, Form, Input, Message, Image, Header } from 'semantic-ui-react'

// const options = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
//     { key: 'o', text: 'Other', value: 'other' },
//   ]

var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var namePattern =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }   

    handleSizeChange = (e, { value }) => {
        this.setState({ size: value })  
    }

    validName = (e, { name, value}) => {
        this.setState({
            [name]: value,
            [`${name}Val`]: namePattern.test(value)
        })
        console.log(this.state)
    }

    validEmail = (e, { name, value }) => {
        this.setState({
            [name]: value,
            [`${name}Val`]: emailPattern.test(value)            
        })
        console.log(this.state);
    }

    handlePass = (e, {name, value}) => {
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleTerm = (e, {name, checked}) => {
        this.setState({
            [name]: checked
        })
        console.log(this.state);
    }

    handleSubmit = (path) => {
        this.props.history.push({
            pathname: path,
            state: this.state
        });
    }

    
    render() {
        const { email, emailVal, firstNmVal, firstNm, lastNmVal, lastNm, termFlag } = this.state  
        return (
            <Grid>
                <Grid.Row centered columns={2}>
                    <Grid.Column>
                        <Segment padded='very'>
                            <Header as='h2' color='teal' textAlign='center'>
                            <Image src={require('../image/logo.png')} size='big' />Sign Up For A New Account
                            </Header>
                            <Form>                                
                                <Form.Group widths='equal'>    
                                <Form.Input fluid label='First name' placeholder='First name' name='firstNm' onChange={this.validName} 
                                    error={
                                        (firstNmVal || !firstNm)
                                        ?
                                        undefined
                                        :
                                        {content: 'not a valid name', pointing: 'below'}
                                    }/>
                                <Form.Input fluid label='Last name' placeholder='Last name' name='lastNm' onChange={this.validName} 
                                    error={
                                        (lastNmVal || !lastNm)
                                        ?
                                        undefined
                                        :
                                        {content: 'not a valid name', pointing: 'below'}
                                    }
                                />
                                {/* <Form.Select
                                    fluid
                                    label='Gender'
                                    options={options}
                                    placeholder='Gender'
                                /> */}
                                </Form.Group>
                                {/* <Form.Group inline>
                                <label>Size</label>
                                <Form.Radio
                                    label='Small'
                                    value='sm'
                                    checked={size === 'sm'}
                                    onChange={this.handleSizeChange}
                                />
                                <Form.Radio
                                    label='Medium'
                                    value='md'
                                    checked={size === 'md'}
                                    onChange={this.handleSizeChange}
                                />
                                <Form.Radio
                                    label='Large'
                                    value='lg'
                                    checked={size === 'lg'}
                                    onChange={this.handleSizeChange}
                                />
                                </Form.Group> */}
                                <Form.Input label='Enter Password' type='password' name='pass1' onChange={this.handlePass} />
                                <Form.Input label='Confirm Password' type='password' name='pass2' onChange={this.handlePass} />
                                <Message
                                    success
                                    header='Password Rule Checking'
                                    content="This password is acceptable"
                                />
                                <Form.Field
                                    id='form-input-control-email'
                                    control={Input}
                                    label='Email'
                                    placeholder='joe@schmoe.com'
                                    name='email'
                                    error={
                                        (emailVal && email) || !email
                                        ?
                                        undefined
                                        :
                                        {content: 'Please enter a valid email address', pointing: 'below'}
                                    }
                                    onChange={this.validEmail}
                                />
                                {/* <Form.TextArea label='About' placeholder='Tell us more about you...' /> */}
                                <Form.Checkbox label='I agree to the Terms and Conditions' name='termFlag' onClick={this.handleTerm}/>
                                {/* <Link to={{
                                    pathname: '/sign-up-result',
                                    state: this.state
                                }}> */}
                                <Form.Group inline>
                                    {
                                        (firstNmVal && lastNmVal && emailVal && termFlag) 
                                        ?
                                        <Form.Button onClick={() => this.handleSubmit('/sign-up-result')}>Submit</Form.Button>
                                        :
                                        <Form.Button disabled color='red'>Submit</Form.Button>
                                    }    
                                    {/* </Link> */}
                                    <Form.Button color='blue' onClick={() => {this.props.history.push('/')}}>Go To Main</Form.Button>
                                </Form.Group>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )

    }

}    

export default SignUp;