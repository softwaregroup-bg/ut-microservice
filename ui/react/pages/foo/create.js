import React from 'react';
import {AddTab} from 'ut-front-react/containers/TabMenu';
import {getLink} from 'ut-front-react/routerHelper';
import Page from 'ut-front-react/components/PageLayout/Page';
import Container from 'ut-front-react/components/PageLayout/Container';
import Content from 'ut-front-react/components/PageLayout/Content';
import { connect } from 'react-redux';

const Create = () =>
    <Page>
        <AddTab pathname={getLink('ut-standard:fooCreate')} title='Create Foo' />
        <Container>
            <Content style={{position: 'relative'}}>
                PUT CREATE FOO COMPONENTS HERE
            </Content>
        </Container>
    </Page>;

export default connect(
    (state, ownProps) => {
        return {
        };
    },
    (dispatch) => {
        return {
        };
    }
)(Create);
