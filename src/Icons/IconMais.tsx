import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconMais(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10,0A1.114,1.114,0,0,0,8.889,1.111V8.889H1.111a1.111,1.111,0,1,0,0,2.222H8.889v7.778a1.111,1.111,0,0,0,2.222,0V11.111h7.778a1.111,1.111,0,0,0,0-2.222H11.111V1.111A1.114,1.114,0,0,0,10,0Z" />
    </SvgIcon>
  );
}
