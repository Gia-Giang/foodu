import React, {useRef, forwardRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';

interface Props {
  children: any;
  initialValues: any;
  onSubmit: (value: any) => void;
  validationSchema?: any;
  ref: any;
}
const Forms = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ref,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      innerRef={ref}>
      {() => children}
    </Formik>
  );
};

export default forwardRef(Forms);
