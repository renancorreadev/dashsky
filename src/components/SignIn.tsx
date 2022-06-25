import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form";

export const SignIn = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name="email" label="Email" />
          <Input name="password" label="Password" />
        </Stack>
        <Button type="submit" mt={6} colorScheme="green" size="lg">
          Login
        </Button>
      </Flex>
    </Flex>
  );
};
