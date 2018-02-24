// Higher order component - A component that renders another component
// Reuse code
// Render highjacking
// prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share.</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login to view the info.</p>
    )}
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById('app')
);
