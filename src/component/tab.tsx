import './tab.css'
import { DataContext } from './dataContext'
import { useContext } from 'react'

const tab = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    const tabContext = useContext(DataContext)
    return (
        <div className="organisation-konto-tabs">
            <div className="organisation-konto-tab-first">
                <p className="organisation-konto-organisationshierark">
                    {tabContext.tabInfo.organisationshierarki}
                </p>
            </div>
            <div className="organisation-konto-tab-second">
                <p className="organisation-konto-schemainstllningar">
                    {tabContext.tabInfo.schemainställningar}
                </p>
            </div>
            <div className="organisation-konto-tab-third">
                <p className="organisation-konto-kontoinstllningar">
                    {tabContext.tabInfo.kontoinställningar}
                </p>
            </div>
        </div>
    )
}

export default tab