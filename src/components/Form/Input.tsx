import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        type="text"
        placeholder="Search"
        focusBorderColor="green.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
