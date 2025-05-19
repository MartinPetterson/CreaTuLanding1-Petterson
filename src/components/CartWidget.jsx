// const CartWidget = () => {
//     return (
//         <div> Carrito: 0 </div>
//     );
// }

// export default CartWidget;

import { Flex } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
  return (
    <Flex alignItems="center">
      <CiShoppingCart size={30} /> 0
    </Flex>
  );
};

export default CartWidget;
