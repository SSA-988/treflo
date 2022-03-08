import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";

function PizzaItems({ products }) {
  const [price,setPrice] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rating,setRating] = useState([]);
  const sortByPrice = () => {
     products.sort((a, b) => (a.price > b.price ? 1 : -1));
     setPrice(products);
  }
  const sortByRating = () => {
     products.sort((a, b) => (a.rating > b.rating ? 1 : -1));
     setRating(products);
  }
  const modal = (
    <Modal size="sm" active={showModal}>
      <ModalBody>
        <input
          type="text"
          className="outline-none w-full"
          placeholder="enter the name of document"
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </ModalBody>
    </Modal>
  );
  const modall = () => {
    return (
      <Modal size="sm" active={showModal}>
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
            onClick={() => setShowModal(false)}
            ripple="dark"
          >
            Cancel
          </Button>

          <Button color="blue" buttonType="link" ripple="light">
            Create
          </Button>
        </ModalFooter>
      </Modal>
    );
    
  }
  //  const modal = (
     
  //  );
  return (
    <>
      {/* {modal} */}
      <div
        onClick={sortByPrice}
        className="absolute left-6 text-xs font-bold top-60 md:top-72  md:left-10 lg:top-82 lg:left-14  xl:top-2/3 lg:text-sm xl:left-16 bg-blue-300 text-white p-2 rounded-full cursor-pointer "
      >
        <h2>Sort based on Price</h2>
      </div>
      <div
        onClick={sortByRating}
        className="absolute right-6 text-xs font-bold top-60 md:top-72 md:right-10 xl:top-2/3 lg:text-sm lg:right-16 bg-blue-300 text-white p-2 rounded-full cursor-pointer "
      >
        <h2>Sort based on Rating</h2>
      </div>
      <div className="grid grid-flow-row-dense  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 md:rounded-md">
        {products.map(
          ({
            id,
            name,
            price,
            description,
            category,
            img_url,
            isVeg,
            rating,
            toppings,
            size,
          }) => (
            <Pizza
              key={id}
              name={name}
              rating={rating}
              id={id}
              toppings={toppings}
              isVeg={isVeg}
              price={price}
              description={description}
              size={size}
              category={category}
              img_url={img_url}
            />
          )
        )}
      </div>
      {/* {modall()} */}
      <div className="cursor-pointer" onClick={() => setShowModal(false)}>
        hello
      </div>
    </>
  );
}

export default PizzaItems;
