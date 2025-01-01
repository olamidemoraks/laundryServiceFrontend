const baseUrl = "https://excel-laundary.onrender.com/api/v1/reservation";
const info = JSON.parse(localStorage.getItem("_profile") as string) ?? {
  token: "",
};
const token = info.token;
// console.log("token", token);

export const createReservation = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return data.json();
  } catch (error: any) {
    console.log(error);
  }
};

export const getUserReservation = async (newToken = "") => {
  console.log("newtoken", newToken);
  console.log("token", token);
  try {
    const data = await fetch(`${baseUrl}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${newToken ? newToken : token}`,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserReservation = async ({ id }: any) => {
  try {
    const data = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const allReservation = async (query: string) => {
  try {
    const data = await fetch(`${baseUrl}/getall${query}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateReservationStatus = async ({
  id,
  values,
}: {
  id: string;
  values: any;
}): Promise<void> => {
  try {
    const data = await fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        ...values,
      }),
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const getResevation = async ({ id }: { id: string }) => {
  try {
    const data = await fetch(`${baseUrl}/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (error) {
    return error;
  }
};
