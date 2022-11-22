export async function getPartisList() {
  const partis = await fetch(
    "https://636365e737f2167d6f784d0d.mockapi.io/parti"
  );

  return partis.json();
}

export async function getAllPartisId() {
  const partis = await getPartisList();

  const partiId = partis.map(function (parti) {
    return parti.id;
  });

  return partiId.map((partiId) => {
    return {
      params: {
        id: partiId,
      },
    };
  });
}
export async function getPartiDetail(id) {
    const res = await fetch(
      `https://636365e737f2167d6f784d0d.mockapi.io/parti/${id}`
    );
  
    const partiDetail = await res.json();
  
    return {
      id,
      ...partiDetail,
    };
  }
