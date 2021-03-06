// Dependencies for this module:
//   ../../../../react
//   ../../../../moment

import * as React from 'react';
import moment from 'moment';

/***
  * The Scheduler is a root container component designed to process
  * and display the specified data. The Scheduler’s functionality
  * (data visualization and processing) is implemented in several plugins specified as child components.
  * */
export const Scheduler: React.ComponentType<SchedulerProps>;

/*** A plugin that renders Scheduler data for a day. This plugin arranges appointments from top to bottom.
  * If their time intervals overlap, their width is decreased and they are placed next to each other.
  * */
export const DayView: React.ComponentType<VerticalViewProps>;

/***
  * A plugin that renders the Scheduler's week view. This plugin arranges appointments from top to bottom.
  * If their time intervals overlap, their width is decreased and they are placed next to each other.
  * */
export const WeekView: React.ComponentType<WeekViewProps>;

/***
  * A plugin that renders Scheduler data for a month. This plugin arranges appointments from left to right.
  * An appointment's size depends on its duration in days.
  * However, it occupies the entire day cell if an appointment lasts only for several hours or minutes.
  * The time scale and all-day panel are not available in this view.
  * */
export const MonthView: React.ComponentType<MonthViewProps>;

/** A plugin that renders the Scheduler's toolbar. */
export const Toolbar: React.ComponentType<ToolbarProps>;

/** A plugin that renders the Scheduler’s date navigator. */
export const DateNavigator: React.ComponentType<DateNavigatorProps>;

/** A plugin that renders the Scheduler's view switcher. */
export const ViewSwitcher: React.ComponentType<ViewSwitcherProps>;

/** A plugin that renders appointments. */
export const Appointments: React.ComponentType<AppointmentsProps>;

/** A plugin that renders the All Day Panel. */
export const AllDayPanel: React.ComponentType<AllDayPanelProps>;

/** A plugin that manages the view state. It specifies the current date and the displayed view. */
export const ViewState: React.ComponentType<ViewStateProps>;

/** A plugin that manages the scheduler appointment editing state. */
export const EditingState: React.ComponentType<EditingStateProps>;

/** The AppointmentTooltip plugin allows you to display information about an appointment in a tooltip. */
export const AppointmentTooltip: React.ComponentType<AppointmentTooltipProps>;

/** The AppointmentForm plugin renders a form that visualizes appointment’s data and allows a user to modify this data. */
export const AppointmentForm: React.ComponentType<AppointmentFormProps>;

/** A plugin that enables users to edit appointments via drag-and-drop. */
export const DragDropProvider: React.ComponentType<DragDropProviderProps>;

/** A plugin that renders the Scheduler's button which sets the current date to today's date. */
export const TodayButton: React.ComponentType<TodayButtonProps>;

/**
  * A plugin that renders the Scheduler's edit menu.
  * Should not be used with the `IntegratedEditing` plugin.
  */
export const EditRecurrenceMenu: React.ComponentType<EditRecurrenceMenuProps>;

/** A plugin that allows implementing a editing calculation logic. */
export const IntegratedEditing: React.ComponentType<IntegratedEditingProps>;

/** A plugin that renders the dialog which allows users to confirm or to discard delete and cancel appointment actions. */
export const ConfirmationDialog: React.ComponentType<ConfirmationDialogProps>;

export namespace ConfirmationDialog {
  /** Properties passed to a component that renders the dialog's layout. */
  interface LayoutProps {
    /** 'true' if the appointment is being deleted or 'false' if it is being edited. */
    isDeleting: boolean;
    /** The appointment's data. */
    appointmentData?: AppointmentModel;
    /** A component that renders the dialog's buttons. */
    buttonComponent: React.ComponentType<ConfirmationDialog.ButtonProps>;
    /** A function that cancels the confirmation event. */
    handleCancel: () => void;
    /** A function that confirms changes. */
    handleConfirm: () => void;
    /** Uses a localization message's key to retrieve the message. */
    getMessage: (messageKey: string) => string;
  }
  /** Properties passed to a component that renders the overlay window. */
  interface OverlayProps {
    /** A React component instance or a DOM element that is used to position the window. */
    target: React.RefObject<unknown>;
    /** A flag that specifies whether the overlay window is visible. */
    visible: boolean;
    /** A function that is executed when the window is hidden. */
    onHide: () => void;
  }
  /** Properties passed to a component that renders the dialog's buttons. */
  interface ButtonProps {
    /** The button's text. */
    title: string;
    /** A function to execute when the button is clicked. */
    onClick: () => void;
  }
  /** Localization Messages */
  interface LocalizationMessages {
    /** The Discard button's text. */
    discardButton?: string;
    /** The Delete button's text. */
    deleteButton?: string;
    /** The Cancel button's text. */
    cancelButton?: string;
    /** The delete confirmation dialog text. */
    confirmDeleteMessage?: string;
    /** The cancel confirmation dialog text. */
    confirmCancelMessage?: string;
  }
}
export interface ConfirmationDialogProps {
  /** Specifies whether to open the dialog on delete events. */
  ignoreDelete: boolean;
  /** Specifies whether to open the dialog on cancel events. */
  ignoreCancel: boolean;
  /** A component that renders the dialog's layout. */
  layoutComponent: React.ComponentType<ConfirmationDialog.LayoutProps>;
  /** A component that renders the overlay window. */
  overlayComponent: React.ComponentType<ConfirmationDialog.OverlayProps>;
  /** A component that renders the OK and Cancel buttons. */
  buttonComponent: React.ComponentType<ConfirmationDialog.ButtonProps>;
  /** An object that contains localized messages. */
  messages?: ConfirmationDialog.LocalizationMessages;
}

export namespace ViewSwitcher {
  /** Describes properties passed to a component that renders the scheduler root layout. */
  interface SwitcherProps {
    /** A displayed view. */
    currentView: SchedulerView;
    /** An array of available views. */
    availableViews: SchedulerView[];
    /** A function that handles changes to the displayed view. */
    onChange: (nextViewName: string) => void;
  }
}
export interface ViewSwitcherProps {
  /** A component that renders the view switcher. */
  switcherComponent: React.ComponentType<ViewSwitcher.SwitcherProps>;
}

export namespace Scheduler {
    /** Describes properties passed to a component that renders the scheduler root layout. */
    interface RootProps {
        /** A React node to be placed in the root layout. */
        children?: React.ReactNode;
        /** The Scheduler's height. */
        height: number | 'auto';
    }
}
export interface SchedulerProps {
    /*** An array of appointment data objects. */
    data: AppointmentModel[];
    /** A component that renders the root layout. */
    rootComponent: React.ComponentType<Scheduler.RootProps>;
    /** The locale according to which dates should be formatted. */
    locale: string | string[];
    /***
      * The scheduler's height. If the value is 'auto',
      * the height equals that of the container component.
      * **/
    height: number | 'auto';
    /** A number between 0 (Sunday) and 6 (Saturday) that specifies the first day of the week. */
    firstDayOfWeek: number;
}

export interface ViewStateProps {
  /** The current date. */
  currentDate?: number | string | Date;
  /** The initial date in the uncontrolled mode. */
  defaultCurrentDate?: number | string | Date;
  /** Handles changes to the current date. */
  onCurrentDateChange?: (currentDate: Date) => void;
  /** The displayed view’s name. */
  currentViewName?: string;
  /** The initially displayed view’s name in the uncontrolled mode. */
  defaultCurrentViewName?: string;
  /** Handles changes to the displayed view. */
  onCurrentViewNameChange?: (viewName: string) => void;
}

export interface VerticalViewProps extends CommonViewProps {
  /** Specifies the cell’s duration in minutes. */
  cellDuration?: number;
  /** Specifies the start hour of the view time scale. */
  startDayHour?: number;
  /** Specifies the end hour of the view time scale. */
  endDayHour?: number;
  /** A component that renders a view layout. */
  layoutComponent: React.ComponentType<VerticalView.LayoutProps>;
  /** A component that renders a time scale layout. */
  timeScaleLayoutComponent: React.ComponentType<BaseView.TimeScaleLayoutProps>;
  /** A component that renders a time scale label. */
  timeScaleLabelComponent: React.ComponentType<BaseView.TimeScaleLabelProps>;
  /** A component that renders a time scale row. */
  timeScaleRowComponent: React.ComponentType<BaseView.RowProps>;
  /** A component that renders a day scale layout. */
  dayScaleLayoutComponent: React.ComponentType<BaseView.DayScaleLayoutProps>;
  /** A component that renders a day scale empty cell. */
  dayScaleEmptyCellComponent: React.ComponentType<BaseView.DayScaleEmptyCellProps>;
  /** A component that renders a time table layout. */
  timeTableLayoutComponent: React.ComponentType<BaseView.TimeTableLayoutProps>;
}
export namespace VerticalView {
  /** Describes properties passed to a component that renders a vertical view layout. */
  interface LayoutProps extends BaseView.LayoutProps {
    /** A component that renders a time scale layout. */
    timeScaleComponent: React.ComponentType<BaseView.TimeScaleLayoutProps>;
    /** A component that renders a day scale empty cell. */
    dayScaleEmptyCellComponent: React.ComponentType<BaseView.DayScaleEmptyCellProps>;
  }
}

export namespace DayView {
  /** Describes a cell data configuration object. */
  interface CellData extends BaseView.CellData {
  }
  /** Describes properties passed to a component that renders a day view layout. */
  interface LayoutProps extends BaseView.LayoutProps {
  }
  /** Describes properties passed to a component that renders a time scale layout. */
  interface TimeScaleLayoutProps extends BaseView.TimeScaleLayoutProps {
  }
  /** Describes properties passed to a component that renders a time scale label. */
  interface TimeScaleLabelProps extends BaseView.TimeScaleLabelProps {
  }
  /** Describes properties passed to a component that renders a day scale layout. */
  interface DayScaleLayoutProps extends BaseView.DayScaleLayoutProps {
  }
  /** Describes properties passed to a component that renders a day scale cell. */
  interface DayScaleCellProps extends BaseView.DayScaleCellProps {
  }
  /** Describes properties passed to a component that renders a day scale empty cell. */
  interface DayScaleEmptyCellProps extends BaseView.DayScaleEmptyCellProps {
  }
  /** Describes properties passed to a component that renders a time table layout. */
  interface TimeTableLayoutProps extends BaseView.TimeTableLayoutProps {
  }
  /** Describes properties passed to a component that renders a time table cell. */
  interface TimeTableCellProps extends BaseView.TimeTableCellProps {
  }
  /** Describes properties passed to a component that renders the appointment layer. */
  interface AppointmentLayerProps extends BaseView.AppointmentLayerProps {
  }
  /** Describes properties passed to a component that renders a day view row. */
  interface RowProps extends BaseView.RowProps {
  }
}
export interface DayViewProps extends VerticalViewProps {
}

export namespace WeekView {
  /** Describes a cell data configuration object. */
  interface CellData extends BaseView.CellData {
  }
  /** Describes properties passed to a component that renders a week view layout. */
  interface LayoutProps extends BaseView.LayoutProps {
  }
  /** Describes properties passed to a component that renders a time scale layout. */
  interface TimeScaleLayoutProps extends BaseView.TimeScaleLayoutProps {
  }
  /** Describes properties passed to a component that renders a time scale label. */
  interface TimeScaleLabelProps extends BaseView.TimeScaleLabelProps {
  }
  /** Describes properties passed to a component that renders a day scale layout. */
  interface DayScaleLayoutProps extends BaseView.DayScaleLayoutProps {
  }
  /** Describes properties passed to a component that renders a day scale cell. */
  interface DayScaleCellProps extends BaseView.DayScaleCellProps {
  }
  /** Describes properties passed to a component that renders a day scale empty cell. */
  interface DayScaleEmptyCellProps extends BaseView.DayScaleEmptyCellProps {
  }
  /** Describes properties passed to a component that renders a time table layout. */
  interface TimeTableLayoutProps extends BaseView.TimeTableLayoutProps {
  }
  /** Describes properties passed to a component that renders a time table cell. */
  interface TimeTableCellProps extends BaseView.TimeTableCellProps {
  }
  /** Describes properties passed to a component that renders the appointment layer. */
  interface AppointmentLayerProps extends BaseView.AppointmentLayerProps {
  }
  /** Describes properties passed to a component that renders a week view row. */
  interface RowProps extends BaseView.RowProps {
  }
}
export interface WeekViewProps extends VerticalViewProps {
  /** Specifies the days of week that should not be displayed on the view. Accepts an array of zero-based day indexes (0 - Sunday). */
  excludedDays?: number[];
}

export namespace MonthView {
  /** Describes properties passed to a component that renders a month scale cell. */
  interface DayScaleCellProps extends BaseView.DayScaleCellProps {
  }
  /** Describes properties passed to a component that renders a month scale empty cell. */
  interface DayScaleEmptyCellProps extends BaseView.DayScaleEmptyCellProps {
  }
  /** Describes properties passed to a component that renders a time table layout. */
  interface TimeTableLayoutProps {
    /** Specifies the cells meta data. */
    cellsData: MonthView.CellData[][];
    /** A component that renders a time table cell. */
    cellComponent: React.ComponentType<MonthView.TimeTableCellProps>;
    /** A component that renders a time table row. */
    rowComponent: React.ComponentType<MonthView.RowProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
    /** A setCellElementsMeta callback */
    setCellElementsMeta: (cellElementsMeta: CellElementsMeta) => void;
  }
  /** Describes properties passed to a component that renders a time table cell. */
  interface TimeTableCellProps {
    /** Specifies the cell a start time. */
    startDate: Date;
    /** Specifies the cell end time. */
    endDate?: Date;
    /** Indicates whether the cell’s date is not in the current month. */
    otherMonth?: boolean;
    /** Indicates whether the cell’s date is today. */
    today?: boolean;
    /** A function that formats dates according to the set locale. */
    formatDate?: FormatterFn;
  }
  /** Describes properties passed to a component that renders the appointment layer. */
  interface AppointmentLayerProps extends BaseView.AppointmentLayerProps {
  }
  /** Describes properties passed to a component that renders a month view row. */
  interface RowProps extends BaseView.RowProps {
  }
  /** Describes properties passed to a component that renders a month view layout. */
  interface LayoutProps {
    /** A component that renders a month scale layout. */
    dayScaleComponent: React.ComponentType<BaseView.DayScaleLayoutProps>;
    /** A component that renders a time table layout. */
    timeTableComponent: React.ComponentType<BaseView.TimeTableLayoutProps>;
    /** The scrolling API callback */
    setScrollingStrategy: (scrollingStrategy: ScrollingStrategy) => void;
  }
  /** Describes a cell data configuration object. */
  interface CellData extends BaseView.CellData {
    /** Indicates whether the cell’s date is not in the current month. */
    otherMonth: boolean;
  }
  /** Describes properties passed to a component that renders a month scale layout. */
  interface DayScaleLayoutProps {
    /** Specifies the cells meta data. */
    cellsData: MonthView.CellData[][];
    /** A component that renders a month scale cell. */
    cellComponent: React.ComponentType<BaseView.DayScaleCellProps>;
    /** A component that renders a month scale row. */
    rowComponent: React.ComponentType<BaseView.RowProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
  }
}
export interface MonthViewProps extends CommonViewProps {
  /** A component that renders a view layout. */
  layoutComponent: React.ComponentType<MonthView.LayoutProps>;
  /** A component that renders a month scale layout. */
  dayScaleLayoutComponent: React.ComponentType<MonthView.DayScaleLayoutProps>;
  /** A component that renders a time table layout. */
  timeTableLayoutComponent: React.ComponentType<MonthView.TimeTableLayoutProps>;
}

export interface AllDayPanelProps {
  /** A component that renders an All Day panel layout. */
  layoutComponent: React.ComponentType<AllDayPanel.LayoutProps>;
  /** A component that renders an All Day panel cell. */
  cellComponent: React.ComponentType<AllDayPanel.CellProps>;
  /** A component that renders an All Day panel row. */
  rowComponent: React.ComponentType<AllDayPanel.RowProps>;
  /** A component that renders a title cell. */
  titleCellComponent: React.ComponentType<AllDayPanel.TitleCellProps>;
  /** A component that renders the appointment layer. */
  appointmentLayerComponent: React.ComponentType<AllDayPanel.AppointmentLayerProps>;
  /** A component that renders an All Day panel container. */
  containerComponent: React.ComponentType<AllDayPanel.ContainerProps>;
  /** An object that specifies localization messages. */
  messages?: AllDayPanel.LocalizationMessages;
}
export namespace AllDayPanel {
  /** Describes a cell data configuration object. */
  interface CellData {
    /** The cell’s start time. */
    startDate: Date;
    /** The cell’s end time. */
    endDate: Date;
  }
  /** Describes properties passed to a component that renders an All Day panel layout. */
  interface LayoutProps {
    /** Cells’ meta data. */
    cellsData: AllDayPanel.CellData[];
    /** A component that renders an All Day panel cell. */
    cellComponent: React.ComponentType<AllDayPanel.CellProps>;
    /** A component that renders an All Day panel row. */
    rowComponent: React.ComponentType<BaseView.RowProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
    /** A setCellElementsMeta callback */
    setCellElementsMeta: (cellElementsMeta: CellElementsMeta) => void;
  }
  /** Describes properties passed to a component that renders an All Day panel cell. */
  interface CellProps {
    /** The cell’s start time. */
    startDate: Date;
    /** The cell’s end time. */
    endDate: Date;
  }
  /** Describes properties passed to a component that renders an All Day panel row. */
  interface RowProps extends BaseView.RowProps {
  }
  /** Describes properties passed to a component that renders a title cell. */
  interface TitleCellProps {
    /** Returns a localization message by the message key. */
    getMessage: (messageKey: string) => string;
  }
  /** Describes properties passed to a component that renders the appointment layer. */
  interface AppointmentLayerProps extends BaseView.AppointmentLayerProps {
  }
  /** Describes properties passed to a component that renders an All Day panel container. */
  interface ContainerProps {
    /** A React node used to render the All Day panel container content. */
    children: React.ReactNode;
  }
  /** Localization Messages */
  interface LocalizationMessages {
    /** The All Day panel’s title. */
    allDay?: string;
  }
}



export interface CommonViewProps {
  /** The view's unique identifier. */
  name?: string;
  /** The view's name used in UI plugins. */
  displayName?: string;
  /** Multiplies the default view interval. */
  intervalCount?: number;
  /** A component that renders a day scale cell. */
  dayScaleCellComponent: React.ComponentType<BaseView.DayScaleCellProps>;
  /** A component that renders a day scale row.  */
  dayScaleRowComponent: React.ComponentType<BaseView.RowProps>;
  /** A component that renders a time table cell. */
  timeTableCellComponent: React.ComponentType<BaseView.TimeTableCellProps>;
  /** A component that renders a time table row. */
  timeTableRowComponent: React.ComponentType<BaseView.RowProps>;
  /** A component that renders the appointment layer. */
  appointmentLayerComponent: React.ComponentType<BaseView.AppointmentLayerProps>;
}
export namespace BaseView {
  /** Describes properties passed to a component that renders a vertical view layout. */
  interface LayoutProps {
    /** The scrolling API callback */
    setScrollingStrategy: (scrollingStrategy: ScrollingStrategy) => void;
    /** A component that renders a day scale layout. */
    dayScaleComponent: React.ComponentType<BaseView.DayScaleLayoutProps>;
    /** A component that renders a time table layout. */
    timeTableComponent: React.ComponentType<BaseView.TimeTableLayoutProps>;
  }
  /** Describes properties passed to a component that renders a time table layout. */
  interface TimeTableLayoutProps {
    /** Specifies the cells meta data. */
    cellsData: BaseView.CellData[][];
    /** A component that renders a time table cell. */
    cellComponent: React.ComponentType<BaseView.TimeTableCellProps>;
    /** A component that renders a time table row. */
    rowComponent: React.ComponentType<BaseView.RowProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
    /** A setCellElementsMeta callback */
    setCellElementsMeta: (cellElementsMeta: CellElementsMeta) => void;
  }
  /** Describes properties passed to a component that renders a time table cell. */
  interface TimeTableCellProps {
    /** Specifies the cell a start time. */
    startDate?: Date;
    /** Specifies the cell end time. */
    endDate?: Date;
    /** A React node used to render the time table cell content. */
    children?: React.ReactNode;
  }
  /** Describes properties passed to a component that renders a day scale empty cell. */
  interface DayScaleEmptyCellProps {
    /** A React node used to render the row content. */
    children?: React.ReactNode;
  }
  /** Describes properties passed to a component that renders a time scale layout. */
  interface TimeScaleLayoutProps {
    /** Specifies the cells meta data. */
    cellsData: BaseView.CellData[][];
    /** A component that renders a time scale cell. */
    labelComponent: React.ComponentType<BaseView.TimeScaleLabelProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
  }
  /** Describes properties passed to a component that renders a time scale label. */
  interface TimeScaleLabelProps {
    /** Specifies the label's time. */
    time?: Date;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
  }
  /** Describes properties passed to a component that renders a day scale layout. */
  interface DayScaleLayoutProps {
    /** Specifies the cells meta data. */
    cellsData: BaseView.CellData[][];
    /** A component that renders a day scale cell. */
    cellComponent: React.ComponentType<BaseView.DayScaleCellProps>;
    /** A component that renders a day scale row. */
    rowComponent: React.ComponentType<BaseView.RowProps>;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
  }
  /** Describes properties passed to a component that renders a day scale cell. */
  interface DayScaleCellProps {
    /** Specifies the cell end time. */
    startDate: Date;
    /** Specifies the cell start time. */
    endDate?: Date;
    /** Indicates whether the cell’s date is today. */
    today?: boolean;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
  }
  /** Describes properties passed to a component that renders the appointment layer. */
  interface AppointmentLayerProps {
    /** A React node used to render the appointment layer content. */
    children?: React.ReactNode;
  }
  /** Describes properties passed to a component that renders a day view row. */
  interface RowProps {
    /** A React node used to render the row content. */
    children?: React.ReactNode;
  }
  /** Describes a cell data configuration object. */
  interface CellData {
    /** Specifies the cell start time. */
    startDate: Date;
    /** Specifies the cell end time. */
    endDate: Date;
    /** Indicates whether the cell’s date is today. */
    today: boolean;
  }
}

export namespace Toolbar {
  /** Describes properties passed to a component that renders the toolbar root element. */
  interface RootProps {
    /** A React node to be placed in the toolbar. */
    children?: React.ReactNode;
  }
  interface FlexibleSpaceProps {
    /** A React node that should be placed inside the empty area. */
    children?: React.ReactNode;
  }
}
export interface ToolbarProps {
  /** A component that renders the toolbar root element. */
  rootComponent: React.ComponentType<Toolbar.RootProps>;
  /** A component that renders the toolbar’s empty area. */
  flexibleSpaceComponent: React.ComponentType<Toolbar.FlexibleSpaceProps>;
}

export interface EditingStateProps {
  /** The data of an appointment being edited. */
  editingAppointment?: Partial<AppointmentModel>;
  /** The initial value of the editingAppointment property in uncontrolled mode. */
  defaultEditingAppointment?: Partial<AppointmentModel>;
  /** Handles changes to the editingAppointment property value. */
  onEditingAppointmentChange?: (editingAppointment: Partial<AppointmentModel>) => void;
  /** A created but not committed appointment. */
  addedAppointment?: object;
  /** The initial value of the addedAppointment property in uncontrolled mode. */
  defaultAddedAppointment?: object;
  /** Handles changes to the addedAppointment property value. */
  onAddedAppointmentChange?: (addedAppointment: object) => void;
  /** Uncommitted appointment changes. */
  appointmentChanges?: {
    [key: string]: object;
  };
  /** The initial value of the appointmentChanges property in uncontrolled mode. */
  defaultAppointmentChanges?: {
    [key: string]: object;
  };
  /** Handles changes to the appointmentChanges property value. */
  onAppointmentChangesChange?: (appointmentChanges: {
    [key: string]: any;
  }) => void;
  /** Handles commiting appointment changes. */
  onCommitChanges: (changes: ChangeSet) => void;
  /** Handles commiting appointment changes. */
  preCommitChanges?: PreCommitChangesFn;
}

export namespace AppointmentTooltip {
  /** Describes properties passed to a component that renders a tooltip layout. */
  interface LayoutProps {
    /** Specifies the Open button’s visibility. */
    showOpenButton: boolean;
    /** Specifies the Close button’s visibility. */
    showCloseButton: boolean;
    /** Specifies the Delete button’s visibility. */
    showDeleteButton: boolean;
    /** The command button’s identifier list. */
    commandButtonIds: Array<string>;
    /** An event raised when the Open button is clicked. The event handler should open the appointment form. */
    onOpenButtonClick?: () => void;
    /** An event raised when the Delete button is clicked. The event handler should delete an appointment. */
    onDeleteButtonClick?: () => void;
    /** The appointment’s displayed metadata. */
    appointmentMeta?: AppointmentMeta;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
    /** Specifies the tooltip’s visibility. */
    visible?: boolean;
    /** An event raised when the tooltip hides. */
    onHide?: () => void;
    /** A component that renders the tooltip header. */
    headerComponent: React.ComponentType<AppointmentTooltip.HeaderProps>;
    /** A component that renders the tooltip content. */
    contentComponent: React.ComponentType<AppointmentTooltip.ContentProps>;
    /** A component that renders a command button. */
    commandButtonComponent: React.ComponentType<AppointmentTooltip.CommandButtonProps>;
    /** A component that renders an icon for recurring appointments inside the AppointmentTooltip. */
    recurringIconComponent: React.ComponentType<object>;
  }
  /** Describes properties passed to a component that renders the tooltip header. */
  interface HeaderProps {
    /** The appointment’s displayed metadata. */
    appointmentData?: AppointmentModel;
    /** Specifies the Open button’s visibility. */
    showOpenButton: boolean;
    /** Specifies the Close button’s visibility. */
    showCloseButton: boolean;
    /** Specifies the Delete button’s visibility. */
    showDeleteButton: boolean;
    /** The command button’s identifier list. */
    commandButtonIds: Array<string>;
    /** An event raised when the Open button is clicked. The event handler should open the appointment form. */
    onOpenButtonClick?: () => void;
    /** An event raised when the Delete button is clicked. The event handler should delete an appointment. */
    onDeleteButtonClick?: () => void;
    /** An event raised when the tooltip hides. */
    onHide?: () => void;
    /** A component that renders a command button. */
    commandButtonComponent: React.ComponentType<AppointmentTooltip.CommandButtonProps>;
    /** A React node that renders custom elements in the tooltip header. */
    children?: React.ReactNode;
  }
  /** Describes properties passed to a component that renders the tooltip content. */
  interface ContentProps {
    /** The appointment’s displayed metadata. */
    appointmentData?: AppointmentModel;
    /** A function that formats dates according to the locale. */
    formatDate: FormatterFn;
    /** A component that renders an icon that indicates a recurring appointment. */
    recurringIconComponent: React.ComponentType<object>;
    /** A React node that renders custom elements in the tooltip. */
    children?: React.ReactNode;
  }
  /** Describes properties passed to a component that renders a command button. */
  interface CommandButtonProps {
    /** The command identifier. */
    id?: 'open' | 'delete' | 'close';
    /** An event that executes the command. */
    onExecute?: () => void;
  }
}
export interface AppointmentTooltipProps {
  /** Specifies the Open button’s visibility. */
  showOpenButton?: boolean;
  /** Specifies the Close button’s visibility. */
  showCloseButton?: boolean;
  /** Specifies the Delete button’s visibility. */
  showDeleteButton?: boolean;
  /** Specifies the tooltip’s visibility. */
  visible?: boolean;
  /** The appointment’s displayed metadata. */
  appointmentMeta?: AppointmentMeta;
  /** Handles the tooltip’s visibility chages. */
  onVisibilityChange?: (visible: boolean) => void;
  /** Handles the meta data changes. */
  onAppointmentMetaChange?: (appointmentMeta: AppointmentMeta) => void;
  /** A component that renders the tooltip layout. */
  layoutComponent: React.ComponentType<AppointmentTooltip.LayoutProps>;
  /** A component that renders the header. */
  headerComponent: React.ComponentType<AppointmentTooltip.HeaderProps>;
  /** A component that renders the tooltip content. */
  contentComponent: React.ComponentType<AppointmentTooltip.ContentProps>;
  /** A component that renders a command button. */
  commandButtonComponent: React.ComponentType<AppointmentTooltip.CommandButtonProps>;
  /** A component that renders an icon that indicates a recurring appointment. */
  recurringIconComponent: React.ComponentType<object>;
}

export namespace AppointmentForm {
  /** Properties passed to a component that renders an Appointment Form overlay. */
  interface OverlayProps {
    /** Specifies whether the overlay is visible. */
    visible: boolean;
    /** An event raised when the overlay hides. */
    onHide: () => void;
    /** Specifies whether the overlay is full-size. */
    fullSize: boolean;
    /** A React component instance or a DOM element that is used to position the overlay. */
    target: React.RefObject<unknown>;
    /** A React node used to render the overlay content. */
    children: React.ReactNode;
  }
  /** Properties passed to a component that renders the appointment form's layout. */
  interface LayoutProps {
    /** A component that renders a layout for command buttons. */
    commandLayoutComponent: React.ComponentType<AppointmentForm.CommandLayoutProps>;
    /** A component that renders a layout for editors that edit basic appoinement data. */
    basicLayoutComponent: React.ComponentType<AppointmentForm.BasicLayoutProps>;
    /** A component that renders a layout for editors that specify the appointment's recurrence. */
    recurrenceLayoutComponent: React.ComponentType<AppointmentForm.RecurrenceLayoutProps>;
    /** Specifies whether recurrence editors should be rendered. */
    isRecurrence: boolean;
    /** A React node used to render additional components to the layout. */
    children?: React.ReactNode;
  }
  /** Properties passed to a component that renders a layout for command buttons. */
  interface CommandLayoutProps {
    /** Specifies whether the appointment form is read-only. */
    readOnly?: boolean;
    /** Specifies whether the command layout is full-size. */
    fullSize: boolean;
    /** Specifies whether to disable the Save button. */
    disableSaveButton?: boolean;
    /** Specifies whether to hide the Delete button. */
    hideDeleteButton?: boolean;
    /** An event raised when the Commit button is clicked. The event handler should commit an appointment changes. */
    onCommitButtonClick: () => void;
    /** An event raised when the Cancel button is clicked. The event handler should close the appointment form. */
    onCancelButtonClick: () => void;
    /** An event raised when the Delete button is clicked. The event handler should delete an appointment. */
    onDeleteButtonClick: () => void;
    /** Uses a localization message's key to retrieve the message. */
    getMessage: (messageKey: string) => string;
    /** A component that renders a command button. */
    commandButtonComponent: React.ComponentType<AppointmentForm.CommandButtonProps>;
    /** A React node used to render additional components to the Command layout. */
    children?: React.ReactNode;
  }
  /** Properties passed to a component that renders a layout for editors that edit basic appointment data. */
  interface BasicLayoutProps {
    fullSize: boolean;
    /** The appointment's data. */
    appointmentData: AppointmentModel;
    /** An event raised when a field value in the appointment form is changed. */
    onFieldChange: (change: any) => void;
    /** Uses a localization message's key to retrieve the message. */
    getMessage: (messageKey: string) => string;
    /** Specifies whether the appointment form is read-only. */
    readOnly?: boolean;
    /** Specifies the locale as an IETF BCP 47 language tag or an array of such tags. The locale is used to format date-time values. */
    locale: string | string[];
    /** A component that renders a text editor. */
    textEditorComponent: React.ComponentType<AppointmentForm.TextEditorProps>;
    /** A component that renders a date-time editor. */
    dateEditorComponent: React.ComponentType<AppointmentForm.DateEditorProps>;
    /** A component that renders an editor of Boolean values. */
    booleanEditorComponent: React.ComponentType<AppointmentForm.BooleanEditorProps>;
    /** A component that renders a menu of options. */
    selectComponent: React.ComponentType<AppointmentForm.SelectProps>;
    /** A component that renders a text label. */
    labelComponent: React.ComponentType<AppointmentForm.LabelProps>;
    /** A React node used to render additional components to the Basic Layout. */
    children?: React.ReactNode;
  }
  /** Properties passed to a component that renders the appointment form's layout for editors that edit the appointment's recurrence. */
  interface RecurrenceLayoutProps {
    visible: boolean;
    /** The appointment's data. */
    appointmentData: AppointmentModel;
    /** An event raised when a field value in the appointment form is changed. */
    onFieldChange: (nextFieldValue: {
      [fieldName: string]: any;
    }) => void;
    /** Uses a localization message's key to retrieve the message. */
    getMessage: (messageKey: string) => string;
    /** Specifies the appointment form is read-only. */
    readOnly?: boolean;
    /** A function that formats dates based on the locale. */
    formatDate: FormatterFn;
    /** Specifies the locale as an IETF BCP 47 language tag or an array of such tags. The locale is used to format date-time values. */
    locale: string | string[];
    /** A number between 0 (Sunday) and 6 (Saturday) that specifies the first day of the week. */
    firstDayOfWeek: number;
    /** A component that renders a radio group. */
    radioGroupComponent: React.ComponentType<AppointmentForm.RadioGroupProps>;
    /** A component that renders a weekly recurrence selector. */
    weeklyRecurrenceSelectorComponent: React.ComponentType<AppointmentForm.WeeklyRecurrenceSelectorProps>;
    /** A component that renders a text editor. */
    textEditorComponent: React.ComponentType<AppointmentForm.TextEditorProps>;
    /** A component that renders a date-time editor. */
    dateEditorComponent: React.ComponentType<AppointmentForm.DateEditorProps>;
    /** A component that renders a menu of options. */
    selectComponent: React.ComponentType<AppointmentForm.SelectProps>;
    /** A component that renders a text label. */
    labelComponent: React.ComponentType<AppointmentForm.LabelProps>;
    /**  A React node used to render additional components to the Recurrence Layout. */
    children?: React.ReactNode;
  }
  /** Properties passed to a component that renders a text editor on the appointment form. */
  interface TextEditorProps {
    /** The editor's value. */
    value: string | number;
    /** A placeholder displayed inside the text field. */
    placeholder: string;
    /** Specifies whether the text editor is read-only. */
    readOnly: boolean;
    /** Handles value changes. */
    onValueChange: (nextValue: string) => void;
    /** The text editor's type identifier. */
    type: 'titleTextEditor' | 'multilineTextEditor' | 'ordinaryTextEditor' | 'numberEditor';
  }
  /** Properties passed to a component that renders a date-time editor on the appointment form. */
  interface DateEditorProps {
    /** Specifies the date editor is read-only. */
    readOnly?: boolean;
    /** The editor's value. */
    value?: string | number;
    /** When true, users cannot edit the time. */
    excludeTime?: boolean;
    /** Handles value changes. */
    onValueChange: (nextValue: Date) => void;
    /** Specifies the locale as an IETF BCP 47 language tag or an array of such tags. The locale is used to format date-time values. */
    locale?: string | string[];
  }
  /** Properties passed to a component that renders a Boolean value editor on the appointment form. */
  interface BooleanEditorProps {
    /** The editor's text label. */
    label?: string;
    /** The editor's value. */
    value?: boolean;
    /** Handles value changes. */
    onValueChange: (nextValue: boolean) => void;
    /** Specifies the editor is read-only. */
    readOnly?: boolean;
  }
  /** Properties passed to a component that renders a menu of options on the appointment form. */
  interface SelectProps {
    /** The selected option. */
    value: string | number;
    /** Handles value changes. */
    onValueChange: (nextValue: string | number) => void;
    /** Specifies available menu options. */
    availableOptions?: Array<object>;
    /** Specifies whether the menu is read-only. */
    readOnly?: boolean;
    /** The menu's type. */
    type: 'outlinedSelect' | 'filledSelect';
  }
  /** Properties passed to a component that renders a command button on the appointment form. */
  interface CommandButtonProps {
    /** The command button's identifier. */
    id: 'saveButton' | 'deleteButton' | 'cancelButton';
    /** An event that initiates the command execution. */
    onExecute: () => void;
    /** Uses a localization message's key to retrieve the message. */
    getMessage?: (messageKey: string) => string;
  }
  /** Properties passed to a component that renders a text label on the appointment form. */
  interface LabelProps {
    /** The label's type. */
    type?: 'titleLabel' | 'ordinaryLabel';
    /** The label's text. */
    text?: string;
  }
  /** Properties passed to a component that renders a radio group on the appointment form. */
  interface RadioGroupProps {
    /** The appointment's data. */
    appointmentData: AppointmentModel;
    /** Specifies the locale as an IETF BCP 47 language tag or an array of such tags. The locale is used to format date-time values. */
    locale?: string | string[];
    /** A function that formats dates based on the locale. */
    formatDate: FormatterFn;
    /** A number between 0 (Sunday) and 6 (Saturday) that specifies the first day of the week. */
    firstDayOfWeek: number;
    /** An event raised when a field value in the appointment form is changed. */
    onFieldChange: (nextFieldValue: {
      [fieldName: string]: any;
    }) => void;
    /** Specifies the date editor is read-only. */
    readOnly?: boolean;
    /** The radio group's type. */
    type: 'endRepeat' | 'monthlyRadioGroup' | 'yearlyRadioGroup';
    /** Uses a localization message's key to retrieve the message. */
    getMessage?: (messageKey: string) => string;
    /** A component that renders a text editor. */
    textEditorComponent: React.ComponentType<AppointmentForm.TextEditorProps>;
    /** A component that renders a date-time editor. */
    dateEditorComponent: React.ComponentType<AppointmentForm.DateEditorProps>;
    /** A component that renders a menu of options. */
    selectComponent: React.ComponentType<AppointmentForm.SelectProps>;
    /** A component that renders a text label. */
    labelComponent: React.ComponentType<AppointmentForm.LabelProps>;
  }
  /** Properties passed to a component that renders a weekly recurrence selector on the appointment form. */
  interface WeeklyRecurrenceSelectorProps {
    /** A function that formats dates based on the locale. */
    formatDate: FormatterFn;
    /** A number between 0 (Sunday) and 6 (Saturday) that specifies the first day of the week. */
    firstDayOfWeek: number;
    /** Specifies the recurrence rule. */
    rRule: string;
    /** Specifies whether the weekly recurrence selector is read-only. */
    readOnly: boolean;
    /** Handles appointment field value changes. */
    onFieldChange: (nextFieldValue: {
      [fieldName: string]: any;
    }) => void;
  }
  /** Localization Messages */
  interface LocalizationMessages {
    /** The "All Day" editor's label text. */
    allDayLabel?: string;
    /** The "Title" editor's label text. */
    titleLabel?: string;
    /** The "Start Date" editor's label text. */
    startDateLabel?: string;
    /** The "End Date" editor's label text. */
    endDateLabel?: string;
    /** The commit button's text. */
    commitCommand?: string;
    /** The "More Information" editor’s label text. */
    moreInformationLabel?: string;
    /** The "Repeat" editor’s label text. */
    repeatLabel?: string;
    /** The "Notes" editor’s label text. */
    notesLabel?: string;
    /** The "Never" label text. */
    never?: string;
    /** The "Daily" label text. */
    daily?: string;
    /** The "Weekly" label text. */
    weekly?: string;
    /** The "Monthly" label text. */
    monthly?: string;
    /** The "Yearly" label text. */
    yearly?: string;
    /** The "Repeat every" label text. */
    repeatEveryLabel?: string;
    /** The "day(s)" label text. */
    daysLabel?: string;
    /** The "End repeat" label text. */
    endRepeatLabel?: string;
    /** The "On" label text. */
    onLabel?: string;
    /** The "After" label text. */
    afterLabel?: string;
    /** The "Occurrences" label text. */
    occurrencesLabel?: string;
    /** The "week(s) on:" label text. */
    weeksOnLabel?: string;
    /** The "month(s)" label text. */
    monthsLabel?: string;
    /** The "of every month" label text. */
    ofEveryMonthLabel?: string;
    /** The "The" label text. */
    theLabel?: string;
    /** The "First" label text. */
    firstLabel?: string;
    /** The "Second" label text. */
    secondLabel?: string;
    /** The "Third" label text. */
    thirdLabel?: string;
    /** The "Fourth" label text. */
    fourthLabel?: string;
    /** The "Last" label text. */
    lastLabel?: string;
    /** The "year(s)" label text. */
    yearsLabel?: string;
    /** The "of" label text. */
    ofLabel?: string;
    /** The "Every" label text. */
    everyLabel?: string;
  }
}
export interface AppointmentFormProps {
  /** Specifies the appointment form’s visibility. */
  visible?: boolean;
  /** Handles changes to the appointment form’s visibility. */
  onVisibilityChange?: (visible: boolean) => void;
  /** Specifies the appointment’s data that the form displays. */
  appointmentData?: AppointmentModel;
  /** Handles changes to the appointment’s data. */
  onAppointmentDataChange?: (appointmentData: AppointmentModel) => void;
  /** Specifies the appointment form is read-only. */
  readOnly?: boolean;
  /** A component that renders the appointment form's overlay. */
  overlayComponent: React.ComponentType<AppointmentForm.OverlayProps>;
  /** A component that renders the appointment form's layout. */
  layoutComponent: React.ComponentType<AppointmentForm.LayoutProps>;
  /** A component that renders a layout for command buttons. */
  commandLayoutComponent: React.ComponentType<AppointmentForm.CommandLayoutProps>;
  /** A component that renders a layout for editors that edit basic appoinement data. */
  basicLayoutComponent: React.ComponentType<AppointmentForm.BasicLayoutProps>;
  /** A component that renders a layout for editors that specify the appointment's recurrence. */
  recurrenceLayoutComponent: React.ComponentType<AppointmentForm.RecurrenceLayoutProps>;
  /** A component that renders a command button. */
  commandButtonComponent: React.ComponentType<AppointmentForm.CommandButtonProps>;
  /** A component that renders a text editor. */
  textEditorComponent: React.ComponentType<AppointmentForm.TextEditorProps>;
  /** A component that renders a text label. */
  labelComponent: React.ComponentType<AppointmentForm.LabelProps>;
  /** A component that renders a date-time editor. */
  dateEditorComponent: React.ComponentType<AppointmentForm.DateEditorProps>;
  /** A component that renders an editor of Boolean values. */
  booleanEditorComponent: React.ComponentType<AppointmentForm.BooleanEditorProps>;
  /** A component that renders a menu of options. */
  selectComponent: React.ComponentType<AppointmentForm.SelectProps>;
  /** A component that renders a radio group. */
  radioGroupComponent: React.ComponentType<AppointmentForm.RadioGroupProps>;
  /** A component that renders a weekly recurrence selector. */
  weeklyRecurrenceSelectorComponent: React.ComponentType<AppointmentForm.WeeklyRecurrenceSelectorProps>;
  /** An object that specifies localization messages. */
  messages?: AppointmentForm.LocalizationMessages;
}

export namespace EditRecurrenceMenu {
  /** Properties passed to a component that renders the edit menu's layout. */
  interface LayoutProps {
    /** 'true' if the appointment is being deleted or 'false' if it is being edited. */
    isDeleting: boolean;
    /** A component that renders the OK and Cancel buttons. */
    buttonComponent: React.ComponentType<EditRecurrenceMenu.ButtonProps>;
    /** A function that closes the menu. */
    handleClose: () => void;
    /** A function that commits changes. */
    commit: () => void;
    /** A list of available editing operations. */
    availableOperations: Array<any>;
    /** A function that returns a message with the specified key. */
    getMessage: (messageKey: string) => string;
  }
  /** Properties passed to a component that renders the overlay window. */
  interface OverlayProps {
    /** A React component instance or a DOM element that is used to position the window. */
    target: React.RefObject<unknown>;
    /** A flag that specifies whether the overlay window is visible. */
    visible: boolean;
    /** A function that is executed when the window is hidden. */
    onHide: () => void;
  }
  /** Properties passed to a component that renders the OK and Cancel buttons. */
  interface ButtonProps {
    /** The button's text. */
    title: string;
    /** A function to execute when the button is clicked. */
    onClick: () => void;
  }
  /** Localization Messages */
  interface LocalizationMessages {
    /** Text for the 'Current appointment' option. */
    current?: string;
    /** Text for the 'Current and following appointments' option. */
    currentAndFollowing?: string;
    /** Text for the 'All appointments' option. */
    all?: string;
    /** The menu's title that should be displayed when an appointment is being edited. */
    menuEditingTitle?: string;
    /** The menu's title that should be displayed when an appointment is being deleted. */
    menuDeletingTitle?: string;
    /** The Cancel button's text. */
    cancelButton?: string;
    /** The OK button's text. */
    commitButton?: string;
  }
}
export interface EditRecurrenceMenuProps {
  /** A component that renders the edit menu's layout. */
  layoutComponent: React.ComponentType<EditRecurrenceMenu.LayoutProps>;
  /** A component that renders the overlay window. */
  overlayComponent: React.ComponentType<EditRecurrenceMenu.OverlayProps>;
  /** A component that renders the OK and Cancel buttons. */
  buttonComponent: React.ComponentType<EditRecurrenceMenu.ButtonProps>;
  /** An object that contains localized messages. */
  messages?: EditRecurrenceMenu.LocalizationMessages;
}

export interface IntegratedEditingProps {
}

export namespace DragDropProvider {
    /** Describes properties of the component that renders a container for the appointment being dragged. */
    interface ContainerProps {
        /** Represents the appointment being dragged. */
        children: React.ReactNode;
    }
    /** Describes properties of the component that renders the appointment being dragged. */
    interface DraftAppointmentProps {
        /** Specifies the appointment’s data. */
        data: AppointmentModel;
        /** Configures the appointment’s geometry and position. */
        style: React.CSSProperties;
        /** Specifies the appointment’s type. */
        type: string;
        /***
          * true if the appointment is continued from
          * the previous day/week/month/year.
          * */
        fromPrev: boolean;
        /** true if the appointment continues on the next day/week/month/year. */
        toNext: boolean;
    }
    /** Describes properties of the component that renders a copy of the appointment being dragged in its previous location. */
    interface SourceAppointmentProps {
        /** Specifies the appointment’s data. */
        data: AppointmentModel;
        /** Specifies the appointment’s type. */
        type: string;
    }
    /** Describes properties of the component that renders a handle used to resize the appointment. */
    interface ResizeProps {
        /** Specifies the handle’s position in the appointment. */
        position: 'start' | 'end';
        /** Specifies whether the appointment is vertical or horizontal. */
        appointmentType: 'vertical' | 'horizontal';
    }
}
export interface DragDropProviderProps {
    /** A function that specifies draggable appointments. */
    allowDrag?: (appointmentData: AppointmentModel) => boolean;
    /** A function that specifies resizable appointments. */
    allowResize?: (appointmentData: AppointmentModel) => boolean;
    /** A component that renders the appointment being dragged. */
    draftAppointmentComponent: React.ComponentType<DragDropProvider.DraftAppointmentProps>;
    /** A component that renders a copy of the appointment being dragged in its previous location. */
    sourceAppointmentComponent: React.ComponentType<DragDropProvider.SourceAppointmentProps>;
    /** A component that renders a handle used to resize the appointment. */
    resizeComponent: React.ComponentType<DragDropProvider.ResizeProps>;
    /***
      * A component that renders a container for the appointment being dragged.
      * */
    containerComponent: React.ComponentType<DragDropProvider.ContainerProps>;
}

export namespace DateNavigator {
    /** Describes properties passed to a component that renders the scheduler root layout. */
    interface RootProps {
        /** A component that renders the date navigator’s navigation buttons. */
        navigationButtonComponent: React.ComponentType<DateNavigator.NavigationButtonProps>;
        /** A component that renders a button that invokes the date navigator. */
        openButtonComponent: React.ComponentType<DateNavigator.OpenButtonProps>;
        /** Text displayed in the date navigator. */
        navigatorText?: string;
        /** A function that accepts the date navigator’s root element. */
        rootRef: (ref: React.ReactInstance) => void;
        /** An event raised when the date navigator should be shown or hidden. */
        onVisibilityToggle: () => void;
        /***
          * An event raised when a navigation button is clicked.
          * The event handler should switch the date navigator to the next or previous date.
          * */
        onNavigate: (direction: 'forward' | 'back' | undefined, nextDate: string | Date | number) => any;
    }
    /** Properties passed to a component that renders the date navigator’s overlay element. */
    interface OverlayProps {
        /** Specifies whether the overlay is visible. */
        visible?: boolean;
        /** A React component instance or a DOM element that is used to position the overlay element. */
        target?: React.ReactInstance;
        /** An event raised when the date navigator should be hidden. */
        onHide: () => void;
        /** A React node used to render the overlay content. */
        children: React.ReactNode;
    }
    /** Properties passed to a component that renders the date navigator’s open button. */
    interface OpenButtonProps {
        /** An event raised when the date navigator should be shown or hidden. */
        onVisibilityToggle: () => void;
        /** The button text. */
        text?: string;
    }
    /** Properties passed to a component that renders the date navigator’s navigation button. */
    interface NavigationButtonProps {
        /** The button type. */
        type: 'forward' | 'back';
        /** An event raised when the button is clicked. */
        onClick?: (e: any) => void;
    }
}
export interface DateNavigatorProps {
    /** A component that renders the date navigator’s root element. */
    rootComponent: React.ComponentType<DateNavigator.RootProps>;
    /** A component that renders the date navigator’s overlay element. */
    overlayComponent: React.ComponentType<DateNavigator.OverlayProps>;
    /** A component that renders a button that invokes the date navigator. */
    openButtonComponent: React.ComponentType<DateNavigator.OpenButtonProps>;
    /** A component that renders the date navigator’s navigation buttons. */
    navigationButtonComponent: React.ComponentType<DateNavigator.NavigationButtonProps>;
}

export namespace Appointments {
    /** Properties passed to a component that renders an appointment. */
    interface AppointmentProps {
        /** A React node used to render the appointment content. */
        children: React.ReactNode;
        /** An object that specifies the appointment data. */
        data: AppointmentModel;
        /** Specifies whether the appointment is draggable. */
        draggable: boolean;
        /** A function that handles a click on the appointment. */
        onClick?: (e: any) => void;
        /** A function that handles a double click on the appointment. */
        onDoubleClick?: (e: any) => void;
    }
    /** Properties passed to a component that renders the appointment content. */
    interface AppointmentContentProps {
        /** A React node used to render the appointment content. */
        children?: React.ReactNode;
        /** An object that represents appointment data. */
        data: AppointmentModel;
        /** A component that renders an icon for recurring appointments. */
        recurringIconComponent: React.ComponentType<object>;
        /** Specifies whether the appointment is vertical or horizontal. */
        type: 'vertical' | 'horizontal';
        /** A function that formats dates according to the locale. */
        formatDate: FormatterFn;
        /**
          * The appointment's duration type: `"short"`
          * (the appointment occupies half of a timetable cell or less),
          * `"middle"` (occupies the entire cell), or `"long"`
          * (occupies more than one cell).
          */
        durationType: 'short' | 'middle' | 'long';
    }
    /***
      * Properties passed to a component that renders an element
      * which indicates the appointment is divided.
      * */
    interface SplitIndicatorProps {
        /** Specifies whether the element is rendered at the start or end of the divided appointment. */
        position: 'start' | 'end';
        /** Specifies whether the appointment is vertical or horizontal. */
        appointmentType: 'vertical' | 'horizontal';
    }
    /** Properties passed to a component that renders a container for the appointment. */
    interface ContainerProps {
        /** An object that configures the appointment’s geometry and position. */
        style: any;
    }
}
export interface AppointmentsProps {
    /** A component that renders an appointment. */
    appointmentComponent: React.ComponentType<Appointments.AppointmentProps>;
    /** A component that renders the appointment content. */
    appointmentContentComponent: React.ComponentType<Appointments.AppointmentContentProps>;
    /** A component that renders an element which indicates the appointment is divided. */
    splitIndicatorComponent: React.ComponentType<Appointments.SplitIndicatorProps>;
    /** A component that renders an icon for recurring appointments. */
    recurringIconComponent: React.ComponentType<object>;
    /** A component that renders a container for the appointment. */
    containerComponent: React.ComponentType<Appointments.ContainerProps>;
}

export namespace TodayButton {
  /** Properties passed to the component that renders the today button. */
  interface ButtonProps {
    /** Function that sets the Scheduler's current date. */
    setCurrentDate: (nextDate: Date) => void;
    /** Returns a localization message by the message key. */
    getMessage: (messageKey: string) => string;
  }
  /** Localization Messages */
  interface LocalizationMessages {
    /** The today button’s text. */
    today?: string;
  }
}
export interface TodayButtonProps {
  /** A component that renders the today button. */
  buttonComponent: React.ComponentType<TodayButton.ButtonProps>;
  /** An object that specifies localization messages. */
  messages?: TodayButton.LocalizationMessages;
}

export declare type SchedulerDateTime = Date | number | string;
export declare type AppointmentId = number | string;
/** Describes an appointment data object. */
export interface AppointmentModel {
  /** The start date. */
  startDate: SchedulerDateTime;
  /** The end date. */
  endDate: SchedulerDateTime;
  /** The title. */
  title?: string;
  /** The all day flag. */
  allDay?: boolean;
  /** The identifier. */
  id?: number | string;
  /** Specifies the appointment recurrence rule. */
  rRule?: string | undefined;
  /** Specifies dates excluded from recurrence. */
  exDate?: string | undefined;
  /** Any other properties. */
  [propertyName: string]: any;
}
export interface Appointment {
  /** The start date. */
  start: SchedulerDateTime;
  /** The end date. */
  end: SchedulerDateTime;
  /** The all day flag. */
  allDay?: boolean;
  /** The recurrence rule. */
  rRule?: string;
  /** The exception date-times. */
  exDate?: string;
  /** The all appointment data */
  dataItem: AppointmentModel;
}
export interface TimeScale {
  start: Date;
  end: Date;
}
/** Describes an AllDay cell data configuration object. */
export declare type AllDayCell = {
  /** The cell’s start time. */
  startDate: SchedulerDateTime;
  /** The cell’s end time. */
  endDate: SchedulerDateTime;
};
export declare type FormatterFn = (nextDate: SchedulerDateTime | undefined, nextOptions: Intl.DateTimeFormatOptions) => string;
/** Describes a current view object. */
export interface SchedulerView {
  /** View's unique identifier. */
  name: string;
  /** View's visible name. */
  displayName: string;
}
export declare type ScrollingStrategy = {
  topBoundary: number;
  bottomBoundary: number;
  changeVerticalScroll: (value: number) => void;
};
export declare type CellElementsMeta = {
  parentRect: () => ClientRect | DOMRect;
  getCellRects: Array<() => ClientRect | DOMRect>;
};

export declare type ViewCellData = {
  startDate: Date;
  endDate: Date;
};
export interface AppointmentMoment {
  start: moment.Moment;
  end: moment.Moment;
  title?: string;
  allDay?: boolean;
  id?: number | string;
  [propertyName: string]: any;
}



/** An appointment's meta data object. */
export interface AppointmentMeta {
  /** A React component instance or a DOM element that is used to position the tooltip. */
  target: React.ReactInstance;
  /** The appointment's displayed metadata. */
  data: AppointmentModel;
}



export declare type AppointmentChanges = {
  [key: string]: object;
};
export declare type Changes = Partial<AppointmentModel>;
export declare type EditAppointmentPayload = {
  appointmentId: AppointmentId;
};
export declare type RecurrenceEditType = 'all' | 'currentAndFollowing' | 'current';
export declare type PreCommitChangesFn = (changes: Changes | null, appointmentData: Partial<AppointmentModel>, type: RecurrenceEditType) => ChangeSet;
/** Describes uncommitted changes made to the scheduler data. */
export interface ChangeSet {
  /** An array of rows to be created. */
  added?: {
    [key: string]: any;
  };
  /** An associative array that stores changes made to existing data. Each array item specifies changes made to a row. The item's key specifies the associated row's ID. */
  changed?: {
    [key: string]: any;
  };
  /** An array of IDs representing rows to be deleted. */
  deleted?: number | string;
}



/** Describes a cell data configuration object. */
export interface MonthCellData {
  /** Specifies the cell start time. */
  startDate: Date;
  /** Specifies the cell end time. */
  endDate: Date;
  /** Indicates whether the cell's date is not in the current month. */
  otherMonth: boolean;
  /** Indicates whether the cell's date is today. */
  today: boolean;
}



export interface ChangeCurrentDatePayload {
  nextDate: Date;
  step: 'day' | 'week' | 'month';
  amount: number;
  direction: string;
}





export declare type ClientOffset = {
  x: number;
  y: number;
};

