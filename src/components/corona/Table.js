import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'
import React, {Component} from "react";
//import Corona from "../../data/corona";
const { SearchBar } = Search;

const columns = [{
    dataField: 'Country',
    text: '국가명',
    sort: true
}, {
    dataField: 'TotalConfirmed',
    text: '확진자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}, {
    dataField: 'TotalDeaths',
    text: '사망자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}, {
    dataField: 'TotalRecovered',
    text: '완치자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
},{
    dataField: 'NewConfirmed',
    text: '신규 확진자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
},{
    dataField: 'NewDeaths',
    text: '신규 사망자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
},{
    dataField: 'NewRecovered',
    text: '신규 완치자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
];

export default class Main extends Component{
     constructor(props) {
         super(props);
     }

    render() {
        return(
            <ToolkitProvider
                keyField="id"
                data={ this.props.Corona.Countries }
                columns={ columns }
                search
            >
            {
                props => (
                <div>
                    <SearchBar { ...props.searchProps }
                               placeholder="Enter 국가명..."
                               id="text-filter-column-Country"
                               className="filter text-filter form-control undefined"/>
                    <hr />
                    <BootstrapTable
                        striped
                        hover
                        { ...props.baseProps }
                        sort={{ dataField: 'TotalConfirmed', order: 'desc' }}
                        pagination={ paginationFactory() }
                    />
                </div>
                )
            }
            </ToolkitProvider>
            /*
        <BootstrapTable
                striped
                hover
                keyField='id' data={ this.props.Corona.Countries }
                sort={{ dataField: 'TotalConfirmed', order: 'desc' }}
                columns={ columns }
                pagination={ paginationFactory() }
                filter={ filterFactory() }
                filterPosition='inline'/>*/
        )
    }
}
