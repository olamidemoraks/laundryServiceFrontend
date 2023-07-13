const baseUrl = "http://localhost:3500/api/v1/overview";
const info = JSON.parse(localStorage.getItem("_profile") as string) ?? {
  token: "",
};
const token = info.token;

export const getOverview = async () => {
  try {
    const data = await fetch(`${baseUrl}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
