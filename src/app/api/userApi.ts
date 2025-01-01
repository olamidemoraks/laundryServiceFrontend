const baseUrl = "https://laundryservicebackend-cmmh.onrender.com/api/v1/user";
const info = JSON.parse(localStorage.getItem("_profile") as string) ?? {
  token: "",
};
const token = info.token ?? "";

export const updateAddress = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}/updateUserProfile`, {
      method: "PATCH",
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
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updatePassword = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}/updateUserPassword`, {
      method: "PATCH",
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
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const showMe = async () => {
  try {
    const data = await fetch(`${baseUrl}/showMe`, {
      method: "GET",
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

export const allUsers = async (query: string) => {
  try {
    const data = await fetch(`${baseUrl}${query}`, {
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
