import './home.css'
import TopNav from './topNav'
import Search from './search'
import Tab from './tab'
import Action from './action'
import DataTableTitle from './dataTableTitle'
import DataTable from './dataTable'
import { DataContextProvider } from './dataContext'

const Home = () => {
  return (
    <DataContextProvider>
    <div className='organisation-konto'>
      <TopNav />
      <div className="organisation-konto-bgheader" />
      <Search />
      <Tab />
      <Action />
      <DataTableTitle />
      <DataTable />
    </div>
    </DataContextProvider>
  )
}

export default Home