export default function userHandler(req, res) {
  const {
    query: { id },
  } = req;

  fetch(`${process.env.baseUrl}/people/${id}`)
    .then(response => response.json())
    .then(json => { res.send(json); });
}
