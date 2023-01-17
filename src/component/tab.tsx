import './tab.css'

type tabProps = {
    tabInfo: {
        organisationshierarki: string
        schemainställningar: string
        kontoinställningar: string
    }
}

const tab = (props: tabProps) => {
    return (
        <div className="organisation-konto-tabs">
            <div className="organisation-konto-tab-first">
                <p className="organisation-konto-organisationshierark">
                    {props.tabInfo.organisationshierarki}
                </p>
            </div>
            <div className="organisation-konto-tab-second">
                <p className="organisation-konto-schemainstllningar">
                    {props.tabInfo.schemainställningar}
                </p>
            </div>
            <div className="organisation-konto-tab-third">
                <p className="organisation-konto-kontoinstllningar">
                    {props.tabInfo.kontoinställningar}
                </p>
            </div>
        </div>
    )
}

export default tab