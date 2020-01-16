import React, { createRef } from 'react';
import { Link } from "react-router-dom";
import { Select, Label, Dropdown, Input, Container, Divider, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'
import '../App.css';
import MainProvider from './MainProvider';
import Category from './Category';

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

class Home extends React.Component {
  inputRef = createRef()
  handleClick = () => this.inputRef.current.focus()

    render() {
      return (
        <MainProvider>
          <Segment>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <p>
                  <Image src={require('../image/1.jpg')} />
                </p>
                <Input placeholder='Search...' />
                <Input focus placeholder='Search...' />
                <Input loading icon='user' iconPosition='left' placeholder='Search...' />
                <Input disabled placeholder='Search...' />
                <Input error placeholder='Search...' />
                <Input icon='search' placeholder='Search...' />
                <Input icon='users' iconPosition='left' placeholder='Search users...' />
                <Input
                  icon={{ name: 'search', circular: true, link: true }}
                  placeholder='Search...'
                />
                <Input
                  icon={<Icon name='search' inverted circular link />}
                  placeholder='Search...'
                />
              <Input icon placeholder='Search...'>
                <input />
                <Icon name='search' />
              </Input>
              <Input iconPosition='left' placeholder='Email'>
                <Icon name='at' />
                <input />
              </Input>
              <Input label='http://' placeholder='mysite.com' />
              <Input
                label={<Dropdown defaultValue='.com' options={options} />}
                labelPosition='right'
                placeholder='Find domain'
              />
              <Input labelPosition='right' type='text' placeholder='Amount'>
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Input>
              <Input
                icon='tags'
                iconPosition='left'
                label={{ tag: true, content: 'Add Tag' }}
                labelPosition='right'
                placeholder='Enter tags'
              />
              <Input action='Search' placeholder='Search...' />
              <Input
                action={{
                  color: 'teal',
                  labelPosition: 'left',
                  icon: 'cart',
                  content: 'Checkout',
                }}
                actionPosition='left'
                placeholder='Search...'
                defaultValue='52.03'
              />
              <Input
                action={
                  <Dropdown button basic floating options={options} defaultValue='page' />
                }
                icon='search'
                iconPosition='left'
                placeholder='Search...'
              />
              <Input type='text' placeholder='Search...' action>
                <input />
                <Select compact options={options} defaultValue='articles' />
                <Button type='submit'>Search</Button>
              </Input>
              <Input
                action={{
                  color: 'teal',
                  labelPosition: 'right',
                  icon: 'copy',
                  content: 'Copy',
                }}
                defaultValue='http://ww.short.url/c0opq'
              />
              <Input transparent placeholder='Search...' />
              <Segment inverted>
                <Input inverted placeholder='Search...' />
              </Segment>      
              <Input fluid icon='search' placeholder='Search...' />
              <Button content='focus' onClick={this.handleClick} />
              <Input ref={this.inputRef} placeholder='Search...' /> 
              <Input list='languages' placeholder='Choose language...' />
              <datalist id='languages'>
                <option value='English' />
                <option value='Chinese' />
                <option value='Dutch' />
              </datalist>                       
              </Grid.Column>
              
              <Grid.Column>
                  <Image src={require('../image/2.jpg')} size='large' wrapped />
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <Icon loading name='spinner' />
                <Icon loading name='certificate' />
                <Icon loading name='asterisk' />
                <Icon link name='close' />
                <Icon link name='help' />
                <Icon name='home' size='mini' />
                <Icon name='home' size='tiny' />
                <Icon name='home' size='small' />
                <Icon name='home' size='small' />
                <br />
                <Icon color='red' name='home' />
                <br />
                <Icon color='orange' name='home' size='large' />
                <br />
                <Icon color='yellow' name='home' size='big' />
                <br />
                <Icon color='olive' name='home' size='huge' />
                <br />
                <Icon color='green' name='home' size='massive' />
                <Icon color='teal' circular name='users' />
                <Icon color='blue' circular name='users' />
                <Icon color='violet' circular inverted name='users' />
                <Icon color='purple' circular inverted name='users' />
                <Icon color='pink' bordered name='users' />
                <Icon color='brown' bordered name='users' />
                <Icon color='grey' bordered inverted name='users' />
                <Icon color='black' bordered inverted name='users' />
                <Icon.Group size='huge'>
                  <Icon size='big' color='red' name='dont' />
                  <Icon color='black' name='user' />
                </Icon.Group>
                <Icon.Group size='huge'>
                  <Icon loading size='big' name='circle notch' />
                  <Icon name='user' />
                </Icon.Group>
                <Icon.Group size='huge'>
                  <Icon name='puzzle' />
                  <Icon corner='top left' name='add' />
                </Icon.Group>

                <Icon.Group size='huge'>
                  <Icon name='puzzle' />
                  <Icon corner='top right' name='add' />
                </Icon.Group>

                <Icon.Group size='huge'>
                  <Icon name='puzzle' />
                  <Icon corner='bottom left' name='add' />
                </Icon.Group>

                <Icon.Group size='huge'>
                  <Icon name='puzzle' />
                  <Icon corner='bottom right' name='add' />
                </Icon.Group> 
                <Icon.Group size='large'>
                  <Icon name='twitter' />
                  <Icon corner name='add' />
                </Icon.Group>                                               
              </Grid.Column>
            </Grid>

            <Divider vertical>            
              <Link to="/image">
                <Button primary>To Image Page</Button>        
              </Link>
              <Category/>          
            </Divider>
          </Segment>          
          <Container textAlign='left'>Left Aligned</Container>
          <Container textAlign='center'>Center Aligned</Container>
          <Container textAlign='right'>Right Aligned</Container>
          <Container textAlign='justified'>
            <b>Justified</b>
            <Divider />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi.
            </p>            
          </Container>

        </MainProvider>
      );          
    }
}

export default Home;

  