import React from 'react';
import propTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import CustomStore from 'devextreme/data/custom_store';
import TreeList, {Column} from 'devextreme-react/tree-list';

const Navigation = ({graphFetch}) => {
    const tree = React.useMemo(() => new CustomStore({
        key: 'id',
        load: async() => {
            const result = await graphFetch({});
            return result.organization;
        }
    }), [graphFetch]);
    return (
        <TreeList
            id="employees"
            dataSource={tree}
            focusedRowEnabled={true}
            defaultExpandedRowKeys={[null]}
            showRowLines={false}
            showBorders={false}
            columnAutoWidth={true}
            rootValue={null}
            keyExpr='id'
            parentIdExpr='parents'
        >
            <Column dataField='title' caption='Business unit' />
        </TreeList>
    );
};

Navigation.propTypes = {
    graphFetch: propTypes.func
};

export default hot(module)(Navigation);
