import React from 'react'
import Work from './TagsItems/Work'
import Shopping from './TagsItems/Shopping'
import Hobby from './TagsItems/Hobby'
import {Wrapper} from './Tag_styled'

const Tag = ({setCategory}) => {

  // const [showWork, setShowWork] = useState(false);
  // const [showShopping, setShowShopping] = useState(false);
  // const [showHobby, setShowHobby] = useState(false);
  
  return (
    <Wrapper>
      <h3 onClick={() => setCategory('')}>Category</h3>
      <dt onClick={() => {
        // setShowWork(!showWork)
        setCategory('work')
        }}>Work</dt>
      <Work />
      <dt onClick={() => {
        // setShowShopping(!showShopping)
        setCategory('shopping')
      }}>Shopping</dt>
      <Shopping />
      <dt onClick={() => {
        // setShowHobby(!showHobby)
        setCategory('hobby')
      }}>Hobby</dt>
      <Hobby />
    </Wrapper>
  );
}

export default Tag;