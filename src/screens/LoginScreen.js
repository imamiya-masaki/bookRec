import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Input, Button } from '@ui-kitten/components';
import { twitter_id, setTwitterId, user_id, set } from "../Global.js";

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
        this.getUserId(this.state.username)
        setTwitterId(this.state.user_id)
        console.log(user_id);
        this.props.navigation.replace('Tab');
    }

    getUserId(twitter_id) {
        const url = "http://54.178.65.84:8080/user_by_twitter/"
        fetch(url+twitter_id)
        .then((response) => response.json())
        .then((result) => this.setState({user_id: result.id}))
        .catch((error) => console.log(error))
    }
     
    render() {
        return(
            <ApplicationProvider {...eva} theme={eva.light}>
               <Layout style={{flex: 1, justifyContent: 'center', padding: 16}}>
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
                        Login
                    </Button>
                </Layout>
            </ApplicationProvider>
        );
      }
}