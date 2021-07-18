export default function handler(req, res) {
  fetch(`${process.env.baseUrl}/people/`)
    .then(response => response.json())
    .then(json => { res.send(json); })
    .catch(error => { res.send(error); });
}
