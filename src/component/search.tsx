import { useContext } from 'react'
import './search.css'
import { DataContext } from './dataContext'

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchContext = useContext(DataContext)
  return (
    <div className="organisation-konto-title-search">
      <p className="organisation-konto-smstadens-kommun">{searchContext.searchInfo.smastadensKommun}</p>
      <div className="organisation-konto-search-input-field">
        <p className="organisation-konto-search">{searchContext.searchInfo.sok}</p>
      </div>
    </div>
  )
}

export default search