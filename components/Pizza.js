import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  LightningBoltIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/cartSlice";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

function Pizza({
  id,
  name,
  price,
  description,
  img_url,
  isVeg,
  rating,
  toppings,
  size,
}) {
  const clicked = false;
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [isActive, setActive] = useState(false);
  const [select,stSelect] = useState(false);
  const [large,setLarge] = useState(false);
  const [value,setValue] = useState("");
  const data = value;
  const onClick = () => {
    setActive(!isActive);
    setValue("Small");
  };
  const onSelect = () => {
    stSelect(!select);
    setValue("Medium");
  };
  const onPress = () => {
    setLarge(!large);
    setValue("Large");
  };
  const addItemToBasket = () => {
    const product = {
      id,
      price,
      description,
      img_url,
      isVeg,
      rating,
      data,
    };
    dispatch(addToBasket(product));
    router.push("/Checkout")
  };
    
    const modal = (
      <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalBody>
          <input
            type="text"
            className="outline-none w-full"
            placeholder="enter the name of document"
            onKeyDown={(e) => e.key === "Enter" && createDocument()}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            color="blue"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Cancel
          </Button>

          <Button
            color="blue"
            buttonType="link"
          
            ripple="light"
          >
            Create
          </Button>
        </ModalFooter>
      </Modal>
    );
  return (
    <>
      {/* <Button
        color="lightBlue"
        type="button"
        onClick={setShowModalCode(true)}
        ripple="light"
      >
        Open small Modal
      </Button> */}

      {/* <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setShowModalCode(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button
            color="green"
            onClick={(e) => setShowModalCode(false)}
            ripple="light"
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal> */}

      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <Image src={img_url} height={200} width={200} objectFit="contain" />

        <h4 className="my-3 font-semibold">{name}</h4>

        <div className="flex">
          <h3>{rating}</h3>
          <StarIcon className="w-6 h-6 text-[#006491] " />
          <div className="flex items-center ml-1">
            {isVeg ? (
              <>
                <h3 className="text-green-600 font-semibold">Pure Veg</h3>
                <SparklesIcon className="w-4 h-4 text-[#00693E] ml-1 " />
              </>
            ) : (
              <>
                <h3 className="text-red-600 font-semibold">Non-Veg</h3>
                <LightningBoltIcon className="w-4 h-4 text-[#D2122E] ml-1 " />
              </>
            )}
          </div>
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="flex items-center space-x-2 mb-5">
          <h2>
            {"₹"}
            {price}
          </h2>
          <div className="flex items-center space-x-2">
            <h3
              onClick={onClick}
              className={`${
                isActive ? "animate-bounce" : "bg-[#DB7093]"
              } cursor-pointer font-semibold bg-[#DB7093] rounded-md p-1 text-white`}
            >
              Small
            </h3>
            <h3
              onClick={onSelect}
              className={`${
                select ? "animate-bounce" : "bg-[#DB7093]"
              } cursor-pointer font-semibold bg-[#DB7093] rounded-md p-1 text-white`}
            >
              Medium
            </h3>
            <h3
              onClick={onPress}
              className={`${
                large ? "animate-bounce" : "bg-[#DB7093]"
              } cursor-pointer font-semibold bg-[#DB7093] rounded-md p-1 text-white`}
            >
              Large
            </h3>
          </div>
        </div>  
          <button
          on
            onClick={addItemToBasket}
            disabled={!value}
            className="mt-auto text-white button bg-[#006491] rounded-md p-3"
          >
            Add To cart
          </button>
      </div>
    </>
  );
}

export default Pizza;
