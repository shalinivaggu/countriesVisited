import {Country, Img, Label, ButtonDiv, Button} from './styledComponents'

const Visited = props => {
  const {country, makeItUnvisited} = props
  const {id, name, imageUrl} = country
  const onClickRemove = () => {
    makeItUnvisited(id)
  }
  return (
    <Country>
      <Img src={imageUrl} alt="thumbnail" />
      <Label>
        <p>{name}</p>
        <ButtonDiv>
          <Button type="button" onClick={onClickRemove}>
            Remove
          </Button>
        </ButtonDiv>
      </Label>
    </Country>
  )
}

export default Visited
