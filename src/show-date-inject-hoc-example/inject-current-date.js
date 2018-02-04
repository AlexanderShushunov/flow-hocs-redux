// @flow
import * as React from 'react';

type InjectProps = {
    date: Date
}

export function injectCurrentDate<AllProps: InjectProps>(
    WrappedComponent: React.ComponentType<AllProps>
): React.ComponentType<$Diff<$Exact<AllProps>, InjectProps>> {
    return function WrapperComponent(props: $Diff<$Exact<AllProps>, InjectProps>) {
        return <WrappedComponent {...props} date={new Date()} />;
    };
}
