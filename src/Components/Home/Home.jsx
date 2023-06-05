import React from 'react';
import { Flex, Button, Text, List, Divider } from '@mantine/core';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xs"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <div className="Top-Container">
        <div className="Title-of-Intro-App-Container">
            <h1>Logger App</h1>
        </div>
      </div>

      <div className="Middle-Container">
        <Divider my="lg"/>
        <Text fz="md" ta="center">Welcome to my logger site!</Text>
        <Text fz="md" ta="center">This is a logger app that logs all the activities of the user.</Text>
        <Text fz="md" ta="center">You are able to:</Text>
        <List withPadding>
            <List.Item>Provide a date</List.Item>
            <List.Item>Provide your first and last name</List.Item>
            <List.Item>Provide what you did that day</List.Item>
            <List.Item>Then provide what you would rate your day out of ten stars</List.Item>
        </List>
        <Text fz="md" ta="center">But first you have to <Button onClick={() => navigate("/auth")}>log in</Button> to gain access to the logger</Text>
      </div>

      <div className="Bottom-Container">
        <Divider my="lg"/>
        <Text fz="md" ta="center">This site utlizes react 20 and Mantine styles for frontend and flask python for backend</Text>
      </div>
    </Flex>
  )
}

export default Home