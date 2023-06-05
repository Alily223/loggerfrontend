import React, {useState} from 'react';
import {Flex, TextInput, Button} from '@mantine/core';

const Login = ({userLoginStatus, setUserLoginStatus, username, setUsername, adminLoginStatus, setAdminLoginStatus}) => {
    const [password, setPassword] = useState("");
  const [error, setError]= useState("")

  const tobackend = "https://localhost:127.0.0.1/"

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === ""){
      setError("Please input username or password")
    } else {
      fetch(`${tobackend}/users/alexlogin`, {
        method: "POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then((res)=>res.json())
      .then((res)=> {
        if(res.error){
          setError(res.error);
        } else if (res.admin_logged_in === true){
          setUsername(username);
          setAdminLoginStatus("LOGGED_IN");
          setUserLoginStatus("LOGGED_IN");
        } else if (res.admin_logged_in !== true){
          setUsername(username);
          setUserLoginStatus("LOGGED_IN");
        } else {
            setError("Error: Not a user");
            setUsername("");
            setPassword("");
        }
      })
      .catch((error) => {
        console.log("error with creating acount", error);
        setError(error);
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <TextInput
          placeholder="Your Username"
          label="Username"
          description="Input username to log-in"
          variant="filled"
          radius="xl"
          size="md"
          withAsterisk
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          placeholder="Your Password"
          label="Password"
          description="Input Password to log-in"
          variant="filled"
          radius="xl"
          size="md"
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button radius="xl" type="submit"> Submit Log-In </Button>

        {userLoginStatus !== "NOT_LOGGED_IN" ? (
          <p>{userLoginStatus}</p>
        ): error !== "" ? (
          <p>{error}</p>
        ): null}
      </Flex>
    </form>
  )
}

export default Login