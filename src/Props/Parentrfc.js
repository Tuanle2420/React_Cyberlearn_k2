import React from 'react'
import Childrfc from './Childrfc'

export default function Parentrfc() {
    const src = 'https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/znaeng/2012_12_04/images441865_doreamon.jpg'
    const alt = 'doraemon'
  return (
    <Childrfc srcProps={src} altProps={alt}/>
  )
}
