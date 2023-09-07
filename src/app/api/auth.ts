//todo fix ${process.env.BASE_URL}
const baseUrl = `https://laundryservicebackend.onrender.com/api/v1/auth`;

export const login = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}/signin`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return {
      sucess: true,
      data: data.json(),
    };
  } catch (error: any) {
    return {
      sucess: false,
      data: error,
    };
  }
};
export const externalSignin = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}/googleSignin`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return {
      sucess: true,
      data: data.json(),
    };
  } catch (error: any) {
    return {
      sucess: false,
      data: error,
    };
  }
};
export const signup = async ({ values }: any) => {
  try {
    const data = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return {
      sucess: true,
      data: data.json(),
    };
  } catch (error: any) {
    return {
      sucess: false,
      data: error,
    };
  }
};
