import Image from "next/image";
import { useSelector } from "react-redux";
import CheckProduct from "../components/CheckProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/cartSlice";


function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "No items in your Cart" : "Your Cart"}
            </h1>

            {items.map((item, i) => (
              <CheckProduct
                key={item.id}
                name={item.name}
                rating={item.rating}
                id={item.id}
                // toppings={item.toppings}
                isVeg={item.isVeg}
                price={item.price}
                data={item.data}
                description={item.description}
                // size={item.size}
                // category={item.category}
                img_url={item.img_url}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                subtotal ({items.length}Items):{" "}
                <span className="font-bold">
                  {"₹"}
                  {total}
                </span>
              </h2>
              <h3 className="bg-yellow-400 w-32 p-2 mx-auto text-center text-white font-bold rounded-sm mt-4 cursor-pointer">Pay Now</h3>

            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
