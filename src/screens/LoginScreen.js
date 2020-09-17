import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import { twitter_id, setTwitterId } from "../Global.js";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    loginAc() {
        setTwitterId(this.state.username)
        this.props.navigation.replace('Tab');
    }
     
    render() {
        return(
            <ApplicationProvider {...eva} theme={eva.light}>
               <Layout>
                    <Input 
                        placeholder={"Twitter ID"}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />
                    <Input 
                        placeholder={"password"}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <Button onPress={() => this.loginAc()}>
                        BUTTON
                    </Button>
                </Layout>
            </ApplicationProvider>
        );
      }
}