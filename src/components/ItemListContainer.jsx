import { Flex } from "@chakra-ui/react"; 

const ItemListContainer = ({ saludo }) => {
    return <Flex fontSize="2rem" height="90%" width="100vw" justifyContent="center" alignItems="center">{saludo}</Flex>;
    };

    export default ItemListContainer;