import {List, Btn} from './styledComponents'

const CountriesList = props => {
  const {country, visitingCountry} = props
  const {id, isVisited, name} = country
  const onClickVisit = () => {
    visitingCountry(id)
  }
  return (
    <List>
      <p>{name}</p>
      {!isVisited ? (
        <div>
          <Btn type="button" onClick={onClickVisit}>
            Visit
          </Btn>
        </div>
      ) : (
        <p>Visited</p>
      )}
    </List>
  )
}

export default CountriesList
