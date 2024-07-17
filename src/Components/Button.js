import React, { useState } from "react";
import { Button, Flex } from "antd";

function MyButton() {
  const [count, setcount] = useState(0);
  const handleButton = () => {
    setcount(count + 1);
    console.log("button clicked" + count);
  };

  const Buttons = () => (
    <Flex gap="small" wrap>
      <Button type="primary" icon="home" onClick={handleButton}>
        Primary Button
      </Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Flex>
  );
  return (
    <>
      <Buttons />
      <Buttons />
    </>
  );
}

export default MyButton;
