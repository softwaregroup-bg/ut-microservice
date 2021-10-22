import React from 'react';
import PropTypes from 'prop-types';

import { Button, InputText } from 'ut-front-devextreme/core/prime';
import useForm from 'ut-front-devextreme/core/hooks/useForm';
import Controller from 'ut-front-devextreme/core/Controller';

function FooEditor({submit, load}) {
    const {handleSubmit, reset, control} = useForm();
    React.useEffect(() => {
        (async() => reset(load ? await load() : {}))();
    }, [reset, load]);
    return (
        <div className="p-d-flex p-jc-center">
            <div className="card">
                <h5 className="p-text-center">Foo</h5>
                <form onSubmit={handleSubmit(submit)} className="p-fluid">
                    <div className="p-field">
                        <span className="p-float-label">
                            <Controller
                                control={control}
                                name='color'
                                render={({field}) => (
                                    <InputText autoFocus {...field}/>
                                )}
                            />
                            <label>Color</label>
                        </span>
                    </div>
                    <Button type="submit" label="Submit" className="p-mt-2" />
                </form>
            </div>
        </div>
    );
}

FooEditor.propTypes = {
    submit: PropTypes.func,
    load: PropTypes.func
};

/** @type { import("../../handlers").libFactory } */
export default ({
    import: {
        microserviceFooAdd,
        microserviceFooEdit,
        microserviceFooGet
    },
    utMeta
}) => ({
    fooEdit({id: fooId}) {
        async function submit(foo) {
            if (fooId != null) {
                await microserviceFooEdit(foo, utMeta());
            } else {
                foo = await microserviceFooAdd(foo, utMeta());
                fooId = foo.fooId;
            }
        }
        return function FooEdit() {
            return <FooEditor
                submit={submit}
                load={() => microserviceFooGet({fooId}, utMeta())}
            />;
        };
    }
});
