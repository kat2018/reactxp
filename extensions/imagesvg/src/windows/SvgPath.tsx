/*
* SvgPath.tsx
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform abstraction for
* SVG Path elements.
*/

import React = require('react');

import SvgTypes = require('../common/Types');

// TODO: #694092 Not implemented

export class SvgPath extends React.Component<SvgTypes.SvgPathProps, {}> {
    render(): any {
        return null;
    }
}

export default SvgPath;
