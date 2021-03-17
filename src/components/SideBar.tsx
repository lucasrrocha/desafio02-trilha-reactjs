import { Button } from './Button';
import { GenreResponseProps } from '../App'

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[]
  selectedGenreId: number;
  setSelectedGenreId(id: number): void
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  const {genres, selectedGenreId, setSelectedGenreId} = props

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map((genre: {id: number; title: string; name: any; }) => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}