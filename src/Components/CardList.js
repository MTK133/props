import { movies } from "../Data/moviesData"
import Card from "./Card"

function CardList() {
    const showTitle=(title)=> alert(title)
    return (
        <>
            {
                movies.map((el, key) => {
                    return (
                        <div key={key}>
                            <Card data={el} showTitle={showTitle} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardList