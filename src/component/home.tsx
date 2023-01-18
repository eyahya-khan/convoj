import './home.css'
import TopNav from './topNav'
import Search from './search'
import Tab from './tab'
import Action from './action'
import DataTableTitle from './dataTableTitle'
import DataTable from './dataTable'
import { topNavInfo } from './dataInfo'
import { tabInfo } from './dataInfo'
import { searchInfo } from './dataInfo'
import { dataTableTitleInfo } from './dataInfo'
import { actionInfo } from './dataInfo'


const Home = () => {
  return (
    <div className='organisation-konto'>
      <TopNav topNavInfo={topNavInfo} />
      <div className="organisation-konto-bgheader" />
      <Search searchInfo={searchInfo} />
      <Tab tabInfo={tabInfo} />
      <Action actionInfo={actionInfo} />
      <DataTableTitle dataTableTitleInfo={dataTableTitleInfo} />
      <DataTable />
    </div>
  )
}

export default Home