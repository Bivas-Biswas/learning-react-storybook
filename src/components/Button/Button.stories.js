import React from "react";
import Button from "./Button";
// import Center from "../Center/Center";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    // decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant={'primary'}>Primary</Button>
export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>
export const Succes = () => <Button variant={'success'}>Succes</Button>
export const Danger = () => <Button variant={'danger'}>Danger</Button>

const Teplate = arg => <Button {...arg}/>

export const PrimaryA = Teplate.bind({})

PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryA = Teplate.bind({})

SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}
