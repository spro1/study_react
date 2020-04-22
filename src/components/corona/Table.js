import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import React, {Component} from "react";
//import Corona from "../../data/corona";

const columns = [{
    dataField: 'Country',
    text: '국가명',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'TotalConfirmed',
    text: '확진자',
    sort: true

}, {
    dataField: 'TotalDeaths',
    text: '사망자',
    sort: true
}, {
    dataField: 'TotalRecovered',
    text: '완치자',
    sort: true
},
];

export default class Main extends Component{
     constructor(props) {
         super(props);
     }

    render() {
        return(
            <BootstrapTable
                striped
                hover
                keyField='id' data={ this.props.Corona.Countries }
                sort={{ dataField: 'TotalConfirmed', order: 'desc' }}
                columns={ columns }
                pagination={ paginationFactory() }
                filter={ filterFactory() }/>
        )
    }
}
