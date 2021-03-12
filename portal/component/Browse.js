import React from 'react';
import DataGrid, {Selection} from 'devextreme-react/data-grid';
import Box, { Item } from 'devextreme-react/box';
import {hot} from 'react-hot-loader';
import CustomStore from 'devextreme/data/custom_store';
import Toolbar from 'devextreme-react/toolbar';
import Drawer from 'devextreme-react/drawer';

import useToggle from 'ut-front-devextreme/core/hooks/useToggle';

export default hot(module)(({fetch, children}) => {
    const organizations = React.useMemo(() => new CustomStore({
        key: 'actorId',
        load: async() => {
            const result = await fetch({});
            return result.organization;
        }
    }), [fetch]);
    const Details = () => <div style={{ width: '200px' }}>Detail</div>;

    const [navigationOpened, navigationToggle] = useToggle(true);
    const [detailsOpened, detailsToggle] = useToggle(true);
    const navigation = React.useCallback(
        () => <Box width={200} direction='col'>
            <Item ratio={1}>
                {children}
            </Item>
        </Box>,
        [children]
    );

    return (
        <Box direction='col' height='100%'>
            <Item baseSize={40}>
                <Toolbar
                    items={[{
                        widget: 'dxButton',
                        location: 'before',
                        options: {
                            icon: 'menu',
                            onClick: navigationToggle
                        }
                    }, {
                        widget: 'dxButton',
                        location: 'after',
                        options: {
                            icon: 'menu',
                            onClick: detailsToggle
                        }
                    }]}
                />
            </Item>
            <Item ratio={1}>
                <Drawer
                    opened={navigationOpened}
                    openedStateMode='shrink'
                    position='left'
                    revealMode='slide'
                    component={navigation}
                >
                    <Drawer
                        opened={detailsOpened}
                        openedStateMode='shrink'
                        position='right'
                        revealMode='slide'
                        component={Details}
                    >
                        <DataGrid
                            dataSource={organizations}
                            defaultColumns={[{
                                dataField: 'organizationName',
                                caption: 'Name'
                            }, {
                                dataField: 'parents',
                                caption: 'Parents'
                            }, {
                                dataField: 'statusId',
                                caption: 'Status'
                            }, {
                                dataField: 'isEnabled',
                                caption: 'Enabled'
                            }]}
                            showBorders={true}
                        >
                            <Selection
                                mode='multiple'
                                selectAllMode='page'
                                showCheckBoxesMode='onClick'
                            />
                        </DataGrid>
                    </Drawer>
                </Drawer>
            </Item>
        </Box>
    );
});
