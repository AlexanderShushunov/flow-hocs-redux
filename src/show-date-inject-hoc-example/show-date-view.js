// @flow
import * as React from 'react';

type ShowDateViewProps = {
    formatter: Date => string,
    date: Date,
    prefix?: string
}

export const ShowDateView: React.ComponentType<ShowDateViewProps> =
    ({
         date,
         formatter,
         prefix = '-> '
     }) => (
        <div>{prefix}{formatter(date)}</div>
    );
