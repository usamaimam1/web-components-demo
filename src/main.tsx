import r2wc from "@r2wc/react-to-web-component"
import MoviesList from "./App"

const MoviesListWC = r2wc(MoviesList, { shadow: 'closed' })

customElements.define("movies-list", MoviesListWC)