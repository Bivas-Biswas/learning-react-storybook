import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
};

export const Small = () => <Input size={'small'} placeHolder={'Small size'}/>;
export const Medium = () => <Input size={'medium'} placeHolder={'Medium size'}/>;
export const Large = () => <Input size={'large'} placeHolder={'Large size'}/>;
