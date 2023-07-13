interface Reservation {
  _id: string;
  items: ReservationItem[];
  pickupDate: string;
  pickupTime: string;
  receipt: number;
  status: string;
  totalAmount: number;
  totalItems: number;
  updatedAt: string;
  createdAt: string;
  userId: string;
}

interface ReservationItem {
  _id: string;
  category: string;
  image_url: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface Profile {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
}

interface Order extends Profile {
  _id: string;
  items: ReservationItem[];
  pickupDate: Date;
  pickupTime: string;
  receipt: number;
  status: "pending" | "ongoing" | "rejected" | "delivered";
  totalAmount: number;
  totalItems: number;
  createdAt: Date;
}

interface Overview {
  _id: string;
  delivered: number;
  ongoing: number;
  pending: number;
  rejected: number;
  totalReservations: number;
  totalUser: 2;
  todayPickup: [Order];
}
