import { Flex, Input, Text, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1400}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Omnes
        <Text as="span" ml="2" color="pink.500">
          Blockchain
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="4"
        ml="6"
        maxWidth="400"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.500"
          variant="unstyled"
          placeholder="Buscar na Platforma"
          px="4"
          mr="4"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}
