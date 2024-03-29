import React from "react";
import { motion } from "framer-motion";
function MenuCard({ itemNum, burgerSrc, price, title, handler, delay = 0 }) {
  return (
    <motion.div
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay
      }}
      className="menuCard"
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>{price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNum)}>Buy now</button>
      </main>
    </motion.div>
  );
}

export default MenuCard;
