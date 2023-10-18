import React from 'react';
import {Prime, Component, HookForm, hooks} from 'ut-prime';

// This component function is required if using uncontrolled inputs, because of the useFormContext hook,
// that has to be called within the form context.
// If only controlled inputs are used, the markup can be inlined in the <Component> below
function CustomLayout() {
    const {register} = hooks.useFormContext();
    return <div className='w-full'>
        <div className='field grid col-6'>
            <label className='col-4'>Name (controlled): </label>
            <HookForm.Controller name='bar.barName' render={({ field }) => <Prime.InputText className='col-8' {...field} />}/>
        </div>
        <div className='field grid col-6'>
            <label className='col-4'>Name (uncontrolled): </label>
            <input className='col-8' {...register('bar.barName')} />
        </div>
    </div>;
}

const params = {layout: 'custom'};

/** @type { import("../../handlers").libFactory } */
export default () => ({
    'microservice.page.custom': ({id}) => function PageForm() {
        const [trigger, setTrigger] = React.useState();

        return <div className='p-component'>
            <h1>
                Page with form using custom design
            </h1>
            <hr />
            <Component page='microservice.bar.open' params={params} id={parseInt(id)} toolbar={false} setTrigger={setTrigger}>
                <CustomLayout />
            </Component>
            <Prime.Button onClick={trigger} disabled={!trigger} icon='pi pi-save' className='bg-green-500'/>
            <hr />
        </div>;
    }
});
