// @flow
import * as React from 'react';
import { prefixClassNames } from '../../../common';
import type { VideoStreamerRenderer } from './types';

export const renderWithoutSource: VideoStreamerRenderer = (
  videoRef,
  videoElementEventHandlers,
  props,
  baseClassName,
  styles
) => {
  const { className, classNamePrefix, applyBuiltInStyles } = props;
  const classNames = prefixClassNames(classNamePrefix, baseClassName, className);
  return (
    <video
      autoPlay={true}
      controls={false}
      style={applyBuiltInStyles ? styles : undefined}
      className={classNames}
      ref={videoRef}
      {...videoElementEventHandlers}
    />
  );
};

export const renderWithSource: VideoStreamerRenderer = (
  videoRef,
  videoElementEventHandlers,
  props,
  baseClassName,
  styles
) => {
  const { className, classNamePrefix, source, applyBuiltInStyles } = props;
  const classNames = prefixClassNames(classNamePrefix, baseClassName, className);
  const streamUrl = source && (typeof source === 'string' && source.length > 0 ? source : source.streamUrl);
  if (streamUrl) {
    return (
      <video
        autoPlay={true}
        controls={false}
        style={applyBuiltInStyles ? styles : undefined}
        className={classNames}
        src={streamUrl}
        ref={videoRef}
        {...videoElementEventHandlers}
      />
    );
  } else {
    return (
      <video
        className={classNames}
        ref={videoRef}
        src={''}
        controls={false}
        style={applyBuiltInStyles ? styles : undefined}
      />
    );
  }
};
