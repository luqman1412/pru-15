export async function getParlimensList() {
  const parlimens = await fetch(
    "https://636365e737f2167d6f784d0d.mockapi.io/parlimen"
  );

  return parlimens.json();
}
export async function getAllParlimensId() {
  const parlimens = await getParlimensList();

  const parlimensId = parlimens.map(function (parlimen) {
    return parlimen.id;
  });

  return parlimensId.map((parlimensId) => {
    return {
      params: {
        id: parlimensId,
      },
    };
  });
}
export async function getParlimenDetail(id) {
    const res = await fetch(
      `https://636365e737f2167d6f784d0d.mockapi.io/parlimen/${id}`
    );
  
    const parlimenDetail = await res.json();
  
    return {
      id,
      parlimenDetail,
    };
  }
