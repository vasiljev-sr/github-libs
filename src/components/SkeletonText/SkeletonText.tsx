import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './SkeletonText.css';

interface SkeletonTextProps {
  rowsCount?: number;
  dark?: boolean;
}
export const SkeletonText: FC<SkeletonTextProps> = ({ rowsCount = 1, dark = false }) => {
  const rows: ReactNode[] = [];

  for (let i = 0; i < rowsCount; i++) {
    rows.push(<span key={i} className={classNames('skeleton-text__row', 'skeleton-gradient')} />);
  }

  return <span className={classNames('skeleton-text', { 'skeleton-text--accent': dark })}>{rows}</span>;
};
