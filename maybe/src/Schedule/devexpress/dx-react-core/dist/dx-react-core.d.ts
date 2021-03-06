// Dependencies for this module:
//   ../../../../react

import * as React from 'react';

export interface PluginProps {
  /** React elements that expose the plugin's state and actions and render the plugin's UI. */
  children: React.ReactNode;
  name?: string;
  dependencies?: IDependency[];
}
export const Plugin: React.ComponentType<PluginProps>;

export interface PluginHostProps {
  /** Plugin React elements. */
  children: React.ReactNode;
}
export const PluginHost: React.ComponentType<PluginHostProps>;

export interface ActionProps {
  /** The action name. */
  name: string;
  /** A function that is called when the action is executed. */
  action: (payload: any, getters: Getters, actions: Actions) => void;
}
export const Action: React.ComponentType<ActionProps>;

export interface GetterProps {
    /** The Getter's name. */
    name: string;
    /** The shared value. */
    value?: any;
    /*** A function that calculates a value depending on the values other Getters expose.
      * The value is computed each time a related Getter's value changes.
      * Applies only if `value` is not defined.
      */
    computed?: ComputedFn;
}
export const Getter: React.ComponentType<GetterProps>;

export interface TemplateProps {
    /** The template name. The `root` name is reserved. A template called `root` is rendered as the plugin based component's root. */
    name: string;
    /** A predicate function that returns a Boolean value that specifies whether the template should be rendered. */
    predicate?: (params: object) => boolean;
    /** A markup or function that returns a markup based on the specified parameters. */
    children: React.ReactNode | ((params: object) => React.ReactNode);
}
/*** A React component that defines a markup that is rendered
  * as the corresponding TemplatePlaceholder.
  */
export const Template: React.ComponentType<TemplateProps>;

export interface TemplatePlaceholderProps {
  /** The name of a template to be rendered. */
  name?: string;
  /** An object passed to the related template. */
  params?: object;
  children?: (content: any) => any;
}
/** A React component to which a related Template is rendered. */
export const TemplatePlaceholder: React.ComponentType<TemplatePlaceholderProps>;

export interface TemplateConnectorProps {
  /** A function that renders a markup using Getters and Actions passed as arguments. */
  children: (getters: Getters, actions: Actions) => React.ReactNode;
}
/** A React component that provides access to Getters and Actions within a Template. */
export const TemplateConnector: React.ComponentType<TemplateConnectorProps>;

/*** A function that creates a new component that allows you to pass additional properties
  * to the wrapped component.
  */
export const connectProps: (WrappedComponent: React.ComponentType<any>, getAdditionalProps: () => object) => (React.ComponentClass<any, any> & {
  update(): void;
}) | (React.FunctionComponent<any> & {
  update(): void;
});



export type Getters = {
  readonly [getterName: string]: any;
};
export type Actions = {
  [actionName: string]: (payload?: any) => void;
};
export type ComputedFn = (getters: Getters, actions: Actions) => void;

export interface IDependency {
  name: string;
  optional?: boolean;
}

