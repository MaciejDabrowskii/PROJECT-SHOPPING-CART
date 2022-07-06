/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Shop from "./modules/shop/page-shop";

import DisplayItems from "./modules/shop/components/displayItems";
import ShoppingCart from "./modules/shop/components/shoppingCart";

describe("Home component", () =>
{
  it("renders heading correctly", () =>
  {
    const { getByRole } = render(<App />);

    expect(getByRole("heading").textContent)
      .toMatch(/RobCo/i);
  });

  it("renders paragraph correctly", () =>
  {
    render(<App />);

    const paragraph = screen.getByText(/lorem/i).textContent;

    expect(paragraph)
      .toMatch(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex non semper tristique, dolor metus bibendum felis, nec aliquam nulla mi at tellus. Aenean ut est eu eros tristique euismod. Praesent placerat nec libero eu imperdiet. Aliquam tempor tristique tellus, ut viverra nibh semper nec. Donec id hendrerit leo./i);
  });
});

describe("Shop component", () =>
{
  it("lets the user add items to the cart", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);

    const addToCartButton = screen.getAllByTestId("button-add-item");
    const cartIndicator = screen.getByTestId("cart-test-indicator");

    userEvent.click(addToCartButton[0]);

    expect(cartIndicator.textContent)
      .toBe("1");
  });

  it("properly increasing the number when the increment button clicked", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);

    const incrementButton = screen.getAllByTestId("button-increment")[0];
    const input = screen.getAllByTestId("item-quantinity-input")[0];

    userEvent.click(incrementButton);

    expect(input.value)
      .toBe("2");
  });

  it("pproperly decreasing the number when the decrement button clicked", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);

    const input = screen.getAllByTestId("item-quantinity-input")[0];
    const decrementButton = screen.getAllByTestId("button-decrement")[0];

    input.value = "2";
    userEvent.click(decrementButton);

    expect(input.value)
      .toBe("1");
  });

  it("properly changing value when the User types in textfield", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);
    const input = screen.getAllByTestId("item-quantinity-input")[0];

    userEvent.type(input, "1234");

    expect(input.value)
      .toBe("1234");
  });

  it("adds a proper number of items to the cart when quantity typed manually", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);
    const addToCartButton = screen.getAllByTestId("button-add-item")[0];
    const cartIndicator = screen.getByTestId("cart-test-indicator");
    const input = screen.getAllByTestId("item-quantinity-input")[0];

    userEvent.type(input, "2");
    userEvent.click(addToCartButton);

    expect(cartIndicator.textContent)
      .toBe("2");
  });

  it("renders shopping cart component when clicked on shopping cart indicator", () =>
  {
    const { shop } = render(<Router><Shop /></Router>);
    const shopCartIndicator = screen.getAllByTestId("shopping-cart-indicator")[0];

    userEvent.click(shopCartIndicator);

    expect(screen.queryByText(/cart empty/i))
      .toBeInTheDocument;
  });

  /// / Tests with mocking ////

  // DisplayItems

  it("DisplayItems correctly renders items from the data", () =>
  {
    const incrementQuantinity = jest.fn();
    const decrementQuantinity = jest.fn();
    const onQuantinityInput = jest.fn();
    const addToCart = jest.fn();

    const data = {
      Processors: [
        {
          id: "p1",
          Family: "Intel Core i5",
          Name: "Intel Core i5-11400F",
          Brand: "Intel",
          imgURL: "url",
          Frequency: "2.6 GHz",
          Cores: "6",
          price: 150,
          quantinity: 1,
        }],
    };

    render(<DisplayItems
      data={data}
      group="Processors"
      incrementQuantinity={incrementQuantinity}
      decrementQuantinity={decrementQuantinity}
      onQuantinityInput={onQuantinityInput}
      addToCart={addToCart}
    />);

    expect(screen.getByText("Family: Intel Core i5"))
      .toBeInTheDocument;
    expect(screen.getByText("Intel Core i5-11400F"))
      .toBeInTheDocument;
    expect(screen.getByText("Brand: Intel"))
      .toBeInTheDocument;
    expect(screen.getByText("Frequency: 2.6 GHz"))
      .toBeInTheDocument;
    expect(screen.getByText("Cores: 6"))
      .toBeInTheDocument;
    expect(screen.getByText(/150/))
      .toBeInTheDocument;
  });

  ShoppingCart;
  it(" ShoppingCart correctly renders items from the data", () =>
  {
    const shoppingCart = [{
      id: "p1",
      Name: "Intel Core i5-11400F",
      imgURL: "url",
      price: 150,
      quantinity: 99,
    },
    {
      id: "p2",
      Name: "Intel Core i5-9000",
      imgURL: "url",
      price: 1000,
      quantinity: 3,
    },
    ];

    const setShoppingCart = jest.fn();
    const cartValue = () => shoppingCart[0].price + shoppingCart[1].price;
    const setShowCart = jest.fn();
    const showCart = true;

    render(
      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        cartValue={cartValue()}
        setShowCart={setShowCart}
        showCart={showCart}
      />,
    );

    expect(screen.getByText("YOUR SHOPPING CART:"))
      .toBeInTheDocument;
    expect(screen.getByText("Intel Core i5-11400F"))
      .toBeInTheDocument;
    expect(screen.getByText("Intel Core i5-9000"))
      .toBeInTheDocument;
    expect(screen.getByText("99"))
      .toBeInTheDocument;
    expect(screen.getByText("3"))
      .toBeInTheDocument;
    expect(screen.getByText(/1000/))
      .toBeInTheDocument;
    expect(screen.getByText("150 USD"))
      .toBeInTheDocument;
    expect(screen.getByText(`Total: ${cartValue()} USD`))
      .toBeInTheDocument;
  });
});
