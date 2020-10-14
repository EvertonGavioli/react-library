import React from "react";

import { Button, Typography } from "../../component-lib";

import { Container, Content } from "./styles";

const DevelopmentPages: React.FC = () => {
  return (
    <Container>
      <Content>
        <Button bgcolor={"#7159c1"}>Texto</Button>
        <Button disabled bgcolor={"#7159c1"}>
          Texto
        </Button>
        <Button isSecondary={true} bgcolor={"#7159c1"}>
          Texto
        </Button>
        <Button disabled isSecondary={true} bgcolor={"#7159c1"}>
          Texto
        </Button>
      </Content>

      <Content>
        <Typography variant="h4">Teste</Typography>
        <Typography variant="h5">Teste</Typography>
        <Typography variant="h6">Teste</Typography>
        <Typography variant="subtitle1">Teste</Typography>
        <Typography variant="body1">Teste</Typography>
        <Typography variant="body2">Teste</Typography>
        <Typography variant="caption">Teste</Typography>
      </Content>

      <Content>
        <Typography variant="h4" weight="black">
          Teste
        </Typography>
        <Typography variant="h4" weight="extra-bold">
          Teste
        </Typography>
        <Typography variant="h4" weight="bold">
          Teste
        </Typography>
        <Typography variant="h4" weight="semi-bold">
          Teste
        </Typography>
        <Typography variant="h4" weight="regular">
          Teste
        </Typography>
        <Typography variant="h4" weight="medium">
          Teste
        </Typography>
        <Typography variant="h4" weight="light">
          Teste
        </Typography>
        <Typography variant="h4" weight="ultra-light">
          Teste
        </Typography>
      </Content>
    </Container>
  );
};

export default DevelopmentPages;
