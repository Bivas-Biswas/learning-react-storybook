import React from "react";
import { Button } from "@chakra-ui/react";


export default {
    title: 'Chakra/Button',
    component: Button
}

export const Succes = () => <Button colorScheme={'green'}>Success</Button>
export const Danger = () => <Button colorScheme={'red'}>Danger</Button>