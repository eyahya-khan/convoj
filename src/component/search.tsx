import './search.css'

type searchInfoProps = {
  searchInfo: {
    smastadensKommun: string
    sok: string
  }
}
const search = (props: searchInfoProps) => {
  return (
    <div className="organisation-konto-title-search">
      <p className="organisation-konto-smstadens-kommun">{props.searchInfo.smastadensKommun}</p>
      <div className="organisation-konto-search-input-field">
        <p className="organisation-konto-search">{props.searchInfo.sok}</p>
      </div>
    </div>
  )
}

export default search