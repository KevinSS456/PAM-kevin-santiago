import React from "react";
import { Input, Icon, Stack, Pressable, Center, NativeBaseProvider, Button, Image } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  const [show, setShow] = React.useState(false);
  return <Stack space={4} w="100%" alignItems="center">
      <Image width={170} height={200} borderRadius={20} marginBottom={10} source={require('/assets/logo.png')} />

      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" color={"#FFFF"} />
      <Input w={{
      base: "75%",
      md: "25%"
    } } type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}  >
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Password"  color={"#FFFF"}/>
    <Button w={{
      base: "75%",
      md: "25%"
    }} variant="subtle" colorScheme="secondary" backgroundColor={"green.100"}>
     Login
    </Button>
    </Stack>;
     
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3" backgroundColor={"black"}>
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    

