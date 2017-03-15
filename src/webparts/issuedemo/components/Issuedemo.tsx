import * as React from 'react';
//import styles from './Issuedemo.module.scss';
import { IIssuedemoProps } from './IIssuedemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IContextualMenuItem, } from "office-ui-fabric-react/lib/ContextualMenu";
import { CommandBar, ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
export default class Issuedemo extends React.Component<IIssuedemoProps, void> {
  private saySomething() {
    alert("yo");
  }

  private SetupFilters(): Array<IContextualMenuItem> {
    const items = new Array<IContextualMenuItem>();

    const item: IContextualMenuItem = {
      key: "top",
      name: "top",
      title: "uf.managedPropertyName",

    };
    item.items = [];

    item.items.push({
      key: "sub",

      name: "sub",
      title: "sub",
      onClick: this.saySomething.bind(this)
    });

    items.push(item);

    return items;
  }
  public render(): React.ReactElement<IIssuedemoProps> {
    const commandItems: Array<IContextualMenuItem> = this.SetupFilters();
    return (
      <CommandBar items={commandItems} />
    );
  }
}
