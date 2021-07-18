import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

const getIdFromURL = (url) => url.slice(-2, -1);

export default function Index() {
  const { data, error } = useSwr('/api/people', fetcher)

  if (error) return <div>{error}</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.results.map((character) => (
        <li key={character.url}>
          <Link href="/character/[id]" as={`/character/${getIdFromURL(character.url)}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
