// @flow
import * as React from 'react';
import { type CommonGenericProps, defaultClassNamePrefix, prefixClassNames } from '../common';

type Props = CommonGenericProps & {
  children: React.Node
};

class Container extends React.Component<Props> {
  baseClassName = 'container';

  static defaultProps = {
    classNamePrefix: defaultClassNamePrefix
  };

  render() {
    const { className, classNamePrefix, children }: Props = this.props;
    const classNames = prefixClassNames(classNamePrefix, this.baseClassName, className);
    return <div className={classNames}>{children}</div>;
  }
}

export default Container;