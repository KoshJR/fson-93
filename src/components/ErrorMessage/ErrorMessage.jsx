import React from 'react';

export const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p>Oops, something went wrong... {error}</p>
    </div>
  );
};
