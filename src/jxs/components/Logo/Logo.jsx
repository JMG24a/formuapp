import React from "react";
import Link from 'next/link';
import Image from "next/image.js";
//styled
const logo2 = require('../../../../public/image/logo-horizontal.png')

function Logo(){
  return (
    <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '-20px'}}>
      <Link href={'/'}>
        <Image src={logo2} width={'340px'} height={'100px'} alt={'logo'} style={{cursor: 'pointer'}}/>
      </Link>
    </div>
  )
}

export { Logo }
