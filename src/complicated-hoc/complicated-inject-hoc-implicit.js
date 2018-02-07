// @flow

import * as React from 'react';

type Injector<OwnProps: {}, InjectProps: {}> =
    (WrappedComponent: React.ComponentType<OwnProps & InjectProps>) => React.ComponentType<$Exact<OwnProps>>;

function injectMoreProp<OwnProps: {}, InjectProps: {}>(
    findOutMoreProps: OwnProps => InjectProps
): Injector<OwnProps, InjectProps> {
    return WrappedComponent =>
        function WrapperComponent(ownProps: OwnProps) {
            return <WrappedComponent {...ownProps} {...findOutMoreProps(ownProps)} />;
        };
}

// TODO Dose not work if the pros is an exact object.
class MyComponent extends React.Component<{
    shouldBePassed: number,
    injected: number
}> {
    render() {
        const {
            shouldBePassed,
            injected
        } = this.props;
        return shouldBePassed.toFixed() + injected.toFixed();
    }
}

type OwnProps =  {
    shouldBePassed: number
};

type InjectProps = {
    injected: number
};

const findOutMoreProps: OwnProps => InjectProps = ({shouldBePassed}) => ({injected: shouldBePassed + 42});

const injector: Injector<OwnProps, InjectProps> = injectMoreProp(findOutMoreProps);

const MyEnhancedComponent = injector(MyComponent);

export const Usage = () => (
    <div>
        <MyEnhancedComponent shouldBePassed={-1} />
        {/*<MyEnhancedComponent shouldBePassed={'bla-bla'} /> runtime error*/}
        {/*<MyEnhancedComponent /> runtime error*/}
        {/*<MyEnhancedComponent shouldBePassed={-1} injected={3} /> erase prop*/}
        {/*<MyEnhancedComponent shouldBePassed={-1} injected={'text'} /> erase prop with wrong type*/}
        {/*<MyEnhancedComponent shouldBePassed={-1} otherProp={'text'} /> unnecessary prop*/}
    </div>
);
