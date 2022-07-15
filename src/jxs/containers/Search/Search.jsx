import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
//style
import { Search as S, Searcher, ContainerSearching, ContainerOptions, Options} from './search.js';

function Search({slugs, selectionContract}) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    if(e.target.value === ''){
      setSearch([])
      return 0
    }
    const str = e.target.value
    const data = slugs.filter(contract => contract.title.toLowerCase().includes(str.toLowerCase()))
    setSearch(data)
  }

  return(
    <S>
      <ImSearch size={'25px'} color={'gray'} style={{cursor: 'pointer', paddingLeft: '5px'}}/>
      <Searcher type="text" onChange={(e)=>handleSearch(e)}/>
      {search.length > 0 &&
        <ContainerSearching>
          {search.map((contract, index)=>(
            <ContainerOptions key={index} onClick={()=>selectionContract(contract)}>
              <Options>{contract.title}</Options>
            </ContainerOptions>
          ))}
        </ContainerSearching>
      }
   </S>
  )
}

export {Search}
