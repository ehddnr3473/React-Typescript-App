export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
}

// 특정 필드 선택
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
}

// 생략
export type AddressWithoutZipCode = Omit<Address, 'zipCode'>

export type Menu = {
  name: string;
  price: Number;
  category: string;
}