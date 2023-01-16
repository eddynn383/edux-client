import React from 'react';
import { Row, TableState } from 'react-table';
import { Toolbar } from '../Toolbar/Toolbar';
import { IActionButtons } from './ImcTable';

interface IProps {
  className?: string;
  actionButtons: IActionButtons[];
  tableState: TableState<object>;
  row: Row<{ subRowTitle: string }>;
}

export const HoverBar = (props: IProps) => {
  const { className, actionButtons, tableState: state, row } = props;

  return (
    <Toolbar
      className={className}
      mode="horizontal"
      variant="clean"
      collapsable={false}
      collapsed
      entries={[
        actionButtons.map((action: IActionButtons) => {
          const { original } = row;

          const { onClick: onClickAction, disabled: disabledAction } = action;

          const isDisabledAFunction = typeof disabledAction === 'function';

          const disabled = isDisabledAFunction
            ? disabledAction(original)
            : disabledAction;

          const onClick = (e: React.MouseEvent) => {
            // Prevent event bubbling up to the parent row which contains the onClick handler for
            // the expand/collapse logic. Without this, clicking on the toolbar would also expand
            // or collapse a folder
            e.stopPropagation();

            if (!onClickAction) {
              return;
            }

            const {
              pageIndex: pageIndexScope,
              pageSize: pageSizeScope,
              sortBy: sortByScope,
              // In order to get the updated search, we needed to activate `manualGlobalFilter`
              globalFilter,
            } = state;

            onClickAction(row, {
              pageIndex: pageIndexScope,
              pageSize: pageSizeScope,
              sortBy: sortByScope,
              search: globalFilter,
            });
          };

          return {
            ...action,
            type: 'button',
            disabled,
            onClick,
          };
        }),
      ]}
    />
  );
};
