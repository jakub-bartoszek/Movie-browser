import { Tile } from "../../components/common/Tile/Tile"
import { BigPoster, Header } from "./styled"
import bigPoster from "./images/PosterBig.png"
export default function MoviePage() {

  return (
    <div>
      <Header><BigPoster src={bigPoster} alt="" /></Header>

      <Tile />
    </div>
  )
}
