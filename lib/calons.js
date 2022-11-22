export async function getCalonList() {
  const calons = await fetch(
    "https://636365e737f2167d6f784d0d.mockapi.io/calon"
  );
  return calons.json();
}
export async function getAllCalonId() {
  const calons = await getCalonList();

  const calonId = calons.map(function (calon) {
    return calon.id;
  });

  return calonId.map((calonId) => {
    return {
      params: {
        id: calonId,
      },
    };
  });
}

export async function getCalonDetail(id) {
  const res = await fetch(
    `https://636365e737f2167d6f784d0d.mockapi.io/calon/${id}`
  );

  const calonDetail = await res.json();

  return {
    id,
    calonDetail,
  };
}
