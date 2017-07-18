import React, { Component } from 'react';

import * as AUI from 'aui-react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AUI.ApplicationHeader logo="jira" />
        <AUI.PageContent
          pageHeader={<AUI.PageHeader headerText="JIRA page created in REACT" />}
          nav={<AUI.NavGroup>
                <AUI.NavHeading>Components</AUI.NavHeading>
                <AUI.Nav>
                    <AUI.NavItem href="#avatars">Avatars</AUI.NavItem>
                    <AUI.NavItem href="#badges">Badges</AUI.NavItem>
                    <AUI.NavItem href="#banners">Banners</AUI.NavItem>
                    <AUI.NavItem href="#buttons">Buttons</AUI.NavItem>
                    <AUI.NavItem href="#button-group">Button group</AUI.NavItem>
                    <AUI.NavItem href="#icons">Icons</AUI.NavItem>
                    <AUI.NavItem href="#lozenges">Lozenges</AUI.NavItem>
                    <AUI.NavItem href="#tables">Tables</AUI.NavItem>
                </AUI.Nav>
                <AUI.NavHeading>Page layouts</AUI.NavHeading>
                <AUI.Nav>
                    <AUI.NavItem href="#application-header">Application header</AUI.NavItem>
                </AUI.Nav>
            </AUI.NavGroup>}>
            <h2 id="avatars">Avatars</h2>
            <div className="aui-flatpack-example">
                <AUI.Avatar size="xsmall" src="//docs.atlassian.com/aui/latest/docs/images/avatar-16.png" />
                <AUI.Avatar size="small" src="//docs.atlassian.com/aui/latest/docs/images/avatar-24.png" />
                <AUI.Avatar size="medium" src="//docs.atlassian.com/aui/latest/docs/images/avatar-32.png" />
                <AUI.Avatar size="large" src="//docs.atlassian.com/aui/latest/docs/images/avatar-48.png" />
                <AUI.Avatar size="xxlarge" src="//docs.atlassian.com/aui/latest/docs/images/avatar-96.png" />
                <AUI.Avatar size="small" src="//docs.atlassian.com/aui/latest/docs/images/project-24.png" isProject />
                <AUI.Avatar size="medium" src="//docs.atlassian.com/aui/latest/docs/images/project-32.png" isProject />
                <AUI.Avatar size="large" src="//docs.atlassian.com/aui/latest/docs/images/project-48.png" isProject />
                <AUI.Avatar size="xlarge" src="//docs.atlassian.com/aui/latest/docs/images/project-64.png" isProject />
                <AUI.Avatar size="xxxlarge" src="//docs.atlassian.com/aui/latest/docs/images/project-128.png" isProject />
            </div>
            <h2 id="badges">Badges</h2>
            <div className="aui-flatpack-example">
                <AUI.Badge text="1" />
                <AUI.Badge text="2" />
                <AUI.Badge text="3" />
                <AUI.Badge text="4" />
                <AUI.Badge text="5" />
                <AUI.Badge text="6" />
                <AUI.Badge text="7" />
            </div>
            <h2 id="banners">Banners</h2>
            <div className="aui-flatpack-example" style={{height:80}}>
                <AUI.Banner>Your <strong>license has expired!</strong> There are two days left to <a>renew your license</a>.</AUI.Banner>
                <AUI.ApplicationHeader logo="aui" />
            </div>
            <h2 id="buttons">Buttons</h2>
            <div className="aui-flatpack-example">
                <AUI.Button>Button</AUI.Button>
                <AUI.Button type="primary">Primary Button</AUI.Button>
                <AUI.Button type="link">Link Button</AUI.Button>
                <AUI.Button icon="view">Icon Button</AUI.Button>
                <AUI.Button disabled>Disabled Button</AUI.Button>
                <AUI.Button type="subtle" icon="configure">Subtle Button</AUI.Button>
            </div>
            <h2 id="button-group">Button group</h2>
            <div className="aui-flatpack-example">
                <AUI.ButtonGroup>
                    <AUI.Button>Button 1</AUI.Button>
                    <AUI.Button type="primary">Button 2</AUI.Button>
                </AUI.ButtonGroup>
            </div>
            <h2 id="icons">Icons</h2>
            <div className="aui-flatpack-example" id="icon-lists">
                <h5>Global icons</h5>
                <h5>Dev tools icons</h5>
                <h5>Editor icons</h5>
                <h5>JIRA icons</h5>
            </div>
            <h2 id="lozenges">Lozenges</h2>
            <div className="aui-flatpack-example">
                <p>
                    <AUI.Lozenge>Default</AUI.Lozenge>
                    <AUI.Lozenge type="success">Success</AUI.Lozenge>
                    <AUI.Lozenge type="error">Error</AUI.Lozenge>
                    <AUI.Lozenge type="current">Current</AUI.Lozenge>
                    <AUI.Lozenge type="new">New</AUI.Lozenge>
                    <AUI.Lozenge type="moved">Moved</AUI.Lozenge>
                </p>
                <p>
                    <AUI.Lozenge subtle>Default</AUI.Lozenge>
                    <AUI.Lozenge subtle type="success">Success</AUI.Lozenge>
                    <AUI.Lozenge subtle type="error">Error</AUI.Lozenge>
                    <AUI.Lozenge subtle type="current">Current</AUI.Lozenge>
                    <AUI.Lozenge subtle type="new">New</AUI.Lozenge>
                    <AUI.Lozenge subtle type="moved">Moved</AUI.Lozenge>
                </p>
            </div>
            <h2 id="tables">Tables</h2>
            <AUI.Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Matt</td>
                        <td>Bond</td>
                        <td>mbond</td>
                    </tr>
                </tbody>
            </AUI.Table>
            <h2 id="application-header">Application header</h2>
            <div className="aui-flatpack-example" style={{height:40}}>
                <AUI.ApplicationHeader logo="aui" />
            </div>
        </AUI.PageContent>
      </div>
    );
  }
}

export default App;
