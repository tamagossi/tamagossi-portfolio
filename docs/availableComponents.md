# Available Components

Aside from available components provided by Ant Design, there are various reusable components to which provided in here.

<br/>

## DataTable Organism

DataTable component which available in here is a wrapper of ant design datatable, imbued with search box and additional widget to extend your datatable functionality (you can put e.g. status filter in your datatable). To use datatable organism, simply import the component in `organisms` directory and put `OrganismDataTable` in your render jsx. For example:

```
<OrganismDataTable
    dataColumns={this.state.dataColumns}
    dataSourceURL={this.state.dataSourceURL}
    pageSize={8}
/>
```

| Parameter     | Explanation                                                                                 | Mandatory |
| ------------- | ------------------------------------------------------------------------------------------- | --------- |
| dataColumns   | Column definition for datatable, see ant-design datatable documentation of `columns`        | Yes       |
| dataSourceURL | URL of data source endpoint                                                                 | Yes       |
| pageSize      | Number of data each page in pagination, default value is 10                                 | No        |
| filterPlugins | Custom plugin for filter in search query. Complete documentation included in this section.  | No        |
| sortPlugins   | Custom plugin for sorting in search query. Complete documentation included in this section. | No        |

<br/>
<br/>

### Datatable Filter Plugins

You can extend datatable functionality with some custom search plugin which you can build on your own. Note that you need to follow some specification on building your custom filter plugin.

#### `updateFilterQuery` Function

Since this datatable data fetch function implement API guideline from Microsoft, (please refer to https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md#97-filtering), your custom plugin component must use `updateFilterQuery()` props function in order to link your query to datatable filter functionality, for instance:

```
filterChangeHandler = selectedValue => {
	this.props.updateFilterQueries(
		this.props.filterName,
		this.props.filterOperator,
		selectedValue
	);
};
```

Props that must be passed to your plugin component must include at least `filterName` and `filterOperator`.

| Parameter     | Explanation                                                                                    | Mandatory |
| ------------- | ---------------------------------------------------------------------------------------------- | --------- |
| filterName    | Filter attribute name to be appended to filter search query string                             | Yes       |
| selectedValue | Sort operator to be used in query string. Operators available are `-` (`desc`) and `` (`asc`). | Yes       |

<br/>
<br/>

### Datatable Sort Plugins

You can extend datatable functionality with some custom sort plugin which you can build on your own. Note that you need to follow some specification on building your custom sort plugin.

#### `updateSortQuery` Function

We use a concise query standard for sorting functionality. Your custom plugin component must use `updateSortQuery()` props function in order to link your query to datatable filter functionality, for instance:

```
sortChangeHandler = selectedValue => {
	this.props.updateSortQuery(
		this.props.sortName,
		selectedValue
	);
};
```

Props that must be passed to your plugin component must include at least `filterName` and `filterOperator`.

| Parameter      | Explanation                                                                                                                                                                            | Mandatory |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| filterName     | Filter attribute name to be appended to filter search query string                                                                                                                     | Yes       |
| filterOperator | Filter operator to be used in query string. Available filter operator are written in here https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md#973-operator-precedence | Yes       |

<br/>
<br/>
