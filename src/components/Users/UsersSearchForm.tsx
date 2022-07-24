import {FastField, Form, Formik} from "formik";
import * as React from "react";
import {FilterType} from "../../redux/users-reducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};

type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

type UsersSearchFormFilterType = {
    onFilterChanged: (filter: FilterType) => void;
}

const UsersSearchForm: React.FC<UsersSearchFormFilterType> = React.memo((props) => {
    const submit = (values: FormType, { setSubmitting } : {setSubmitting: (isSubmitting: boolean) => void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter);
        setSubmitting(false);
    };
    return <div>
        <Formik
            initialValues = {{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <FastField type='text' name='term'/>
                    <FastField name='friend' as='select'>
                        <option value='null'>All</option>
                        <option value='true'>Only followed</option>
                        <option value='false'>Only unfollowed</option>
                    </FastField>
                    <button key='submit' disabled={isSubmitting}>Find</button>
                </Form>
            )}
        </Formik>
    </div>;
});

export default UsersSearchForm