import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface LikeProps {
    onClick: () => void;
}

const Like = ({onClick}: LikeProps) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  }
  if (liked) {
    return <FaHeart color="red" size={20} onClick={toggle} />;
  }
  else {
    return <FaRegHeart color="grey" size={20} onClick={toggle} />;
  }
};

export default Like;
