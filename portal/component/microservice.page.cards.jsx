import React from 'react';
import {Component} from 'ut-prime';

/** @type { import("../../handlers").libFactory } */
export default () => ({
    'microservice.page.cards': ({id}) => function PageForm() {
        return <div className='p-component'>
            <h1>
                Page with form using model design
            </h1>
            <hr />
            <Component page='microservice.bar.open' id={id} params={{layout: 'cards'}}/>
            <hr />
        </div>;
    }
});
