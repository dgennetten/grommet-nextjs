/* eslint-disable no-param-reassign */
import React from 'react';
import TableComponent from '../components/TableComponent';
import Pagination from '../components/Pagination';
import TheadComponent from '../components/TheadComponent';
import TbodyComponent from '../components/TbodyComponent';
import TfootComponent from '../components/TfootComponent';
import NoDataComponent from '../components/NoDataComponent';
import ResizerComponent from '../components/ResizerComponent';
import ThComponent from '../components/ThComponent';
import TdComponent from '../components/TdComponent';
import FilterComponent from '../components/FilterComponent';
import ExpanderComponent from '../components/ExpanderComponent';
import LoadingComponent from '../components/LoadingComponent';
import TrGroupComponent from '../components/TrGroupComponent';
import TrComponent from '../components/TrComponent';

const emptyObj = () => ({});

export default {
  // General
  data: [],
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: (filter, row, column) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id]).startsWith(filter.value)
      : true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: (a, b, desc) => {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;
    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;
    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  },

  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},

  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,

  // Pivoting
  pivotBy: undefined,

  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',

  // Server-side Callbacks
  onFetchData: () => null,

  // Classes
  className: '',
  style: {},

  // Component decorators
  getProps: emptyObj,
  getTableProps: ({ table }) => (table || {}),
  getTheadGroupProps: ({ header }) => (header || {}),
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: ({ filter }) => (filter || {}),
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getExpanderProps: ({ expander }) => (expander || {}),
  getTfootProps: emptyObj,
  getTfootTrProps: ({ footer }) => (footer || {}),
  getTfootTdProps: emptyObj,
  getPaginationProps: ({ pagination }) => (pagination || {}),
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,

  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // All Columns
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 100,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined,
  },

  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35,
  },

  pivotDefaults: {
    // extend the defaults for pivoted columns here
  },

  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',

  // Components
  TableComponent,
  TheadComponent,
  TbodyComponent,
  TrGroupComponent,
  TrComponent,
  ThComponent,
  TdComponent,
  TfootComponent,
  FilterComponent,
  ExpanderComponent,
  PivotValueComponent: ({ subRows, value }) => (
    <span>
      {value} {subRows && `(${subRows.length})`}
    </span>
  ),
  AggregatedComponent: ({ subRows, column }) => {
    const previewValues = subRows
      .filter(d => typeof d[column.id] !== 'undefined')
      .map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i}>
          {row[column.id]}
          {i < subRows.length - 1 ? ', ' : ''}
        </span>
      ));
    return (
      <span>
        {previewValues}
      </span>
    );
  },
  PivotComponent: undefined, // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: Pagination,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent,
  NoDataComponent,
  ResizerComponent,
  PadRowComponent: () => <span>&nbsp;</span>,
};