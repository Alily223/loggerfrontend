import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Flex, Button, Badge} from "@mantine/core";
import { IconHome2 } from '@tabler/icons-react';

const Navigation = ({userLoginStatus, setUserLoginStatus, username, setUsername, adminLoginStatus, setAdminLoginStatus}) => {
    const navigate = useNavigate();
  return (
    <>
        <nav>
            <div className="nav-wrapper">
                <div className="left-side">
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, .3)"
                    gap="xs"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Button onClick={() => navigate("/")}>
                        <IconHome2/>
                    </Button>

                    <Button onClick={() => navigate("/auth")}>
                        Sign-in
                    </Button>

                    { username !== "" ? (
                        <Badge>{username}</Badge>
                    ): null}
                </Flex>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation