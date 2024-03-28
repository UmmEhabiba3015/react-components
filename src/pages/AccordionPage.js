import React from "react";
import Accordion from '../components/Accordion';

const AccordionPage = () => {
    const items = [
        {
            id: 1,
            label : 'label1',
            content : 'content1'
        },
        {
            id: 2,
            label : 'label2',
            content : 'content2'
        },
        {
            id: 3,
            label : 'label3',
            content : 'content3'
        },
    ]

    return (
        <div>
           <Accordion items={items}/>
        </div>
    )
}
export default AccordionPage;