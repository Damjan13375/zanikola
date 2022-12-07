import React, { useEffect, useState } from "react";
import { Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import "./nekoj.css";
import { Flex, Spacer } from "@chakra-ui/react";
import { Input, Icon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex direction={"column"} justifyContent={"space-around"} alignItems="center" height={'100vh'}>
      <img
        src={
          "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
        }
        height={120}
        width={250}
      />
      <div>
      <Input pr="4.5rem" type={"text"} placeholder="Enter username" />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      </div>
      <Button>

        LOGIN
      </Button>
    </Flex>
  );
};

export default Login;
