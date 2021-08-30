import React from "react";
import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button variant={'primary'}>Primary</Button>
export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>
export const Succes = () => <Button variant={'success'}>Succes</Button>
export const Danger = () => <Button variant={'danger'}>Danger</Button>