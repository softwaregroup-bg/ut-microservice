import React from 'react';
import { AddTab } from 'ut-front-react/containers/TabMenu';
import { getLink } from 'ut-front-react/routerHelper';
import Header from 'ut-front-react/components/PageLayout/Header';
import ResizibleContainer from 'ut-front-react/components/ResiziblePageLayout/Container';
import mainStyle from 'ut-front-react/assets/index.css';
import resizibleTypes from 'ut-front-react/components/ResiziblePageLayout/resizibleTypes';
import { connect } from 'react-redux';

const columns = [{
    type: resizibleTypes.CONTENT,
    id: 'fooContent',
    normalWidth: window.window.innerWidth,
    minWidth: 250,
    child: <div className={mainStyle.contentTableWrap} style={{minWidth: '925px'}}>
        <div>GRID</div>
        <div>PAGINATION</div>
    </div>
}];

const List = () =>
    <div>
        <AddTab pathname={getLink('ut-microservice:fooList')} title='Foo list' />
        <Header text='Foo list' buttons={[{text: 'Create Foo', href: getLink('ut-microservice:fooCreate'), permissions: ['microservice.foo.add'], styleType: 'primaryLight'}]} />
        <div>
            <ResizibleContainer cols={columns} />
        </div>
    </div>;

export default connect(
    (state, ownProps) => {
        return {
        };
    },
    (dispatch) => {
        return {
        };
    }
)(List);
