import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="8" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" align="strech" mt="8">
            <Link display="flex" alignItems="center" color="green.400">
              <Icon as={RiDashboardLine} />
              <Text ml="4" fontWeight="medium" color="gray.400">
                {" "}
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center" color="green.400">
              <Icon as={RiContactsLine} />
              <Text ml="4" fontWeight="medium" color="gray.400">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" align="strech" mt="8">
            <Link display="flex" alignItems="center" color="green.400">
              <Icon as={RiInputMethodLine} />
              <Text ml="4" fontWeight="medium" color="gray.400">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center" color="green.400">
              <Icon as={RiGitMergeLine} />
              <Text ml="4" fontWeight="medium" color="gray.400">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
