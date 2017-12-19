import React, {Component} from 'react';
import './styles.Animae.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {grey400, darkBlack} from 'material-ui/styles/colors';


class Animae extends Component{
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

    render() {
        return (

            <div className="main">

                <div className="s1">
                <div className="s b sb1"><div className="a1">1</div></div>
                <div className="s b sb2"><div className="a2">4</div></div>
                </div>

                <div className="s2">
                <div className="s b sb3"><div className="a1">2</div></div>
                <div className="s b sb4"><div className="a2">5</div></div>
                </div>

                <div className="s3">
                <div className="s b sb5" onClick={this.handleOpen} ><div className="a1"  >6</div></div>
                <div className="s b sb6"><div className="a2">3</div></div>
                </div>

                <div className="bigcon">
                <div className="big b"></div>
                </div>

                <Dialog
                    title="Title 6"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                    <List>
                        <ListItem
                        style={{
                            backgroundColor: '#50C8EE',
                        }}
                        primaryText="Sub Title 1"
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem className="list-modified"
                            key={1}
                            primaryText="Mem 1"
                            leftIcon={<ActionAccountCircle />}
                            rightIcon={<p><a href="https://github.com/" class="icon-13 github" title="GitHub" target="_blank">
                            <svg viewBox="0 0 512 512">
                                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                            </svg>
                            </a>
                            </p>
                            }
                            secondaryText={
                                <p>
                                <span style={{color: darkBlack}}>worked at xyz inc.</span><br />
                                Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                                </p>
                            }
                            secondaryTextLines={2}
                            />,
                        ]}
                        />
                        <ListItem
                        style={{
                            backgroundColor: '#50C8EE',
                        }}
                        className="list-modified"
                        primaryText="Sub Title 2"
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                            key={1}
                            className="list-modified"
                            primaryText="abc"
                            leftIcon={<ActionAccountCircle />}
                            rightIcon={<p><a href="https://github.com/" class="icon-13 github" title="GitHub" target="_blank">
                            <svg viewBox="0 0 512 512">
                                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                            </svg>
                            </a></p>
                            }
                            />,
                            <ListItem className="list-modified"
                            key={2}
                            primaryText="abc"
                            leftIcon={<ActionAccountCircle />}
                            rightIcon={<p><a href="https://github.com/" class="icon-13 github" title="GitHub" target="_blank">
                            <svg viewBox="0 0 512 512">
                                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                            </svg>
                            </a></p>
                            }
                            />,
                            <ListItem className="list-modified"
                            key={3}
                            primaryText="abc"
                            leftIcon={<ActionAccountCircle />}
                            rightIcon={<p><a href="https://github.com/" class="icon-13 github" title="GitHub" target="_blank">
                            <svg viewBox="0 0 512 512">
                                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                            </svg>
                            </a></p>
                            }
                            />,
                            
                        ]}
                        />
                    </List>
                    </Dialog>
            </div>
        );
    }
}

export default Animae;

