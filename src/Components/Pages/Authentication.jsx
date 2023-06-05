import React, {useState} from 'react';
import { Flex, Button } from '@mantine/core';

import Signup from './Signup.jsx';
import Login from './Login.jsx';

const Authentication = ({userLoginStatus, setUserLoginStatus, username, setUsername, adminLoginStatus, setAdminLoginStatus}) => {
    const [pageCompState, setPageCompState] = useState("SIGN-UP")
  return (
    <>
        <div className="Page-Container">
            <Flex
                style={{ width: '100%' }}
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="xl"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
            >
                <div className="Page-Content">
                    { userLoginStatus === "NOT_LOGGED_IN" && pageCompState === "SIGN-UP" ? (
                        <>
                            <Flex
                                style={{ width: '100%' }}
                                mih={50}
                                bg="rgba(0, 0, 0, .3)"
                                gap="xl"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap"
                            >
                                <Button onClick={() => setPageCompState("LOG-IN")}>Log-In</Button>
                                
                            </Flex>

                            <Signup userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>
                        </>
                    ): userLoginStatus === "NOT_LOGGED_IN" && pageCompState === "LOG-IN" ? (
                        <>
                            <Flex
                                mih={50}
                                bg="rgba(0, 0, 0, .3)"
                                gap="xl"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap"
                            >
                                <Button onClick={() => setPageCompState("SIGN-UP")}>Sign-up</Button>
                                
                            </Flex>

                            <Login userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>
                        </>
                    ): ( <>
                            <Flex
                                mih={50}
                                bg="rgba(0, 0, 0, .3)"
                                gap="xl"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap"
                            >
                                <Button onClick={() => setPageCompState("LOG-IN")}>Log-In</Button>
                                
                            </Flex>

                            <Signup userLoginStatus={userLoginStatus} setUserLoginStatus={setUserLoginStatus} username={username} setUsername={setUsername} adminLoginStatus={adminLoginStatus} setAdminLoginStatus={setAdminLoginStatus}/>
                        </>)}
                   
                </div>
            </Flex>
        </div>
    </>
  )
}

export default Authentication