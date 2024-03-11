export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
}

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
}

export type Menu = {
  name: string;
  price: Number;
  category: string;
}