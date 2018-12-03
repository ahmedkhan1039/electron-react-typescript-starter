import { Action } from 'redux';

export interface IAction extends Action {
  readonly type: Symbol;
};

export interface IActionWithPayload<T> extends IAction {
  readonly payload: T;
};