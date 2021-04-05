import React from 'react';

import DirectSon from "./DirectSon";

export default function DirectFather(props) {

    return (
        <div>
            <DirectSon name="John" age={19} nerd={false} />
            <DirectSon name="Constatine" age={36} nerd={true} />
        </div>
    );
};